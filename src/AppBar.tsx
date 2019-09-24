import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SimpleMenu from '../src/MenuBar'

export default class ButtonAppBar extends React.Component<{
  classes: any;
}, {}> {
  
render(){
  return (
    <div className={this.props.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SimpleMenu></SimpleMenu>
          <Typography variant="h6" className={this.props.classes.title}>
            Application Start
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
}``