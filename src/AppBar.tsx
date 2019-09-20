import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class ButtonAppBar extends React.Component<{
  classes: any;
}, {}> {
  
render(){
  return (
    <div className={this.props.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={this.props.classes.title}>
            На Владо Апчето
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
  }
}