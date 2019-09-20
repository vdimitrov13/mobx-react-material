import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './AppBar'

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

@observer
class TimerView extends React.Component<{}, {}> {
    @observable timer = 0;

    constructor(props) {
        super(props);
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }

    render() {
        return (
            <div>
                <ButtonAppBar classes={useStyles}></ButtonAppBar>

                {/* <Button variant="contained" color="primary" onClick={this.onReset}>
                    Seconds passed: {this.timer}
                </Button> */}
                

                <DevTools />
            </div>
        );
     }

     onReset = () => {
         this.resetTimer();
     }
};

ReactDOM.render(<TimerView />, document.getElementById('root'));
