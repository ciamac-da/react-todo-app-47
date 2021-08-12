import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import myStyle from "./HeaderStyle";

const Header = () => {
  const classes = myStyle()
  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              React/Material-UI Todo App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default Header;
