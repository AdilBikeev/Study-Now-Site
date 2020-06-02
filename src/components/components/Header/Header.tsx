import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { DropRightMenu } from './components/DropRightMenu';
import { NavigationItems } from './components/NavigationItems';

const useStyles = makeStyles(createStyles({
  root: {
    display: 'flex',
    backgroundColor: "#EF6767",
  },
  title: {
    fontFamily: 'Ultra',
    fontWeight: 'bold',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
}),
);

type Props = {
  title: string;
  courses: Array<string>
};

/**
 * Заголовок страницы
 * @param title Текст, отображаемый в заголовке Header
 * @param courses Список курсов
 */
export const Header: React.FC<Props> = ({
  title,
  courses
}) => {
  const classes = useStyles();

  const [isOpen, setState] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {

    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(isOpen);
  };

  return (
    <div>

      <Toolbar className={classes.root}>

        {/* Title */}
        <Typography variant="h5" noWrap className={classes.title}>{title}</Typography>

        {/* Вкладки */}
        <NavigationItems courses={courses} />

        {/* Кнопка выпадающего меню */}
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

      </Toolbar>

      <React.Fragment>
        <DropRightMenu courses={courses}
          isOpen={isOpen}
          toggleDropRightMenu={toggleDrawer} />
      </React.Fragment>
    </div>
  );
}