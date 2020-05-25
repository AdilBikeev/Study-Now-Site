import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { DropRightMenu } from './components/DropRightMenu';
import { actions } from './actions';

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
  courses: Array<string>,
  isOpen: boolean,
  toggleDropRightMenu: typeof actions.toggleDropRightMenu
};

export const Header: React.FC<Props> = ({
  title,
  courses,
  isOpen,
  toggleDropRightMenu
}) => {
  const classes = useStyles();

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
          onClick={() => toggleDropRightMenu()}
          className={clsx(isOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </Toolbar>

      <DropRightMenu courses={courses}
                     isOpen={isOpen}
                     toggleDropRightMenu={toggleDropRightMenu}/>
    </div>
  );
}