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
  courses: Array<string>,
  isOpen: boolean
};

/**
 * Заголовок страницы
 * @param title Текст, отображаемый в заголовке Header
 * @param courses Список курсов
 * @param isOpen Задает значение, показывающее, открыто ли выподающее меню.
 */
export const Header: React.FC<Props> = ({
  title,
  courses,
  isOpen
}) => {
  const classes = useStyles();

  const [open, toggleDrawer] = useState(false);

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
            onClick={() => toggleDrawer(!open)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

      </Toolbar>

      <DropRightMenu courses={courses}
        isOpen={open}
        toggleDropRightMenu={toggleDrawer} />
    </div>
  );
}