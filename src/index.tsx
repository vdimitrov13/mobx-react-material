import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import ButtonAppBar from './AppBar';
import TitlebarGridList from './TitleBar';
import {useStyles, titleStyles} from './utils/constants';

@observer
class ApplicationStart extends React.Component<{}, {}> {
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
                <TitlebarGridList classes = {titleStyles}></TitlebarGridList>
                <DevTools />
            </div>
        );
     }

     onReset = () => {
         this.resetTimer();
     }
};

ReactDOM.render(<ApplicationStart />, document.getElementById('root'));
