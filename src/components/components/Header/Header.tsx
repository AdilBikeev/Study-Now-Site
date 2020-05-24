import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Toolbar, Typography, IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Hidden } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: "#EF6767",
    },
    hide: {
      display: 'none',
    },
    tabItems: {
      flexGrow: 1,
      textAlign: "center"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#494949",
      color: "white"
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
  }),
);

type Props = {
  title: string;
  courses: Array<string>
};

export const Header: React.FC<Props> = ({
  title,
  courses
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>

    <Toolbar className={classes.root}>

      {/* Title */}
      <Typography variant="h6" noWrap>
        StudyNow
      </Typography>



      {/* Вкладки */}
      <div className={classes.tabItems}>
        <Hidden xsDown>
          {courses.map(x => (
            <Button key={x} onClick={() => { }}>{x}</Button>
          ))}
        </Hidden>
      </div>

      {/* Кнопка выпадающего меню */}
      <div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={toggleDrawer}
          className={clsx(open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </Toolbar>

      {/* Выпадающее меню */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          {courses.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>

    </div>
  );
}