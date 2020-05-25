import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { DropRightMenu } from './components/DropRightMenu';
import { actions } from './actions';
import { NavigationItems } from './components/NavigationItems';

const useStyles = makeStyles(createStyles({
    root: {
      display: 'flex',
      backgroundColor: "#EF6767",
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
  isOpen: boolean,
  toggleDropRightMenu: typeof actions.toggleDropRightMenu
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
  isOpen,
  toggleDropRightMenu
}) => {
  const classes = useStyles();

  return (
    <div>

    <Toolbar className={classes.root}>

      {/* Title */}
      <Typography variant="h6" noWrap>{ title }</Typography>

      {/* Вкладки */}
      <NavigationItems courses={courses}/>

      {/* Кнопка выпадающего меню */}
      <div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={() => toggleDropRightMenu()}
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