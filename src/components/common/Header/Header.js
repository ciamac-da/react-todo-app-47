import React from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AirplayIcon from '@material-ui/icons/Airplay';
import PersonIcon from '@material-ui/icons/Person';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider
} from '@material-ui/core/';
import useStyles from "./HeaderStyle";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [myalert, setMyAlert] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const aboutApp = () => {
    setMyAlert(true)
    alert("This is a React/Material-UI App")
    setOpen(false);
  }
  const aboutAuthor = () => {
    setMyAlert(true)
    alert("Cia is Author:)")
    setOpen(false);
  }

  return (<div className={classes.root}>
    <CssBaseline/>
    <AppBar position="fixed" className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap="noWrap">
          React/Material-UI Todo App
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{
        paper: classes.drawerPaper
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {
            theme.direction === 'ltr'
              ? <ChevronLeftIcon/>
              : <ChevronRightIcon/>
          }
        </IconButton>
      </div>
      <Divider/>
      <List >
        {
          ['About App', 'About Author'].map((text, index) => (<ListItem onClick={index === 0
              ? aboutApp
              : aboutAuthor} button="button" key={text}>
            <ListItemIcon >{
                index % 2 === 0
                  ? <AirplayIcon/>
                  : <PersonIcon/>
              }</ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>))
        }
      </List>

    </Drawer>
    <main className={clsx(classes.content, {
        [classes.contentShift]: open
      })}>
      <div className={classes.drawerHeader}/>
    </main>
  </div>);
}
export default Header;
