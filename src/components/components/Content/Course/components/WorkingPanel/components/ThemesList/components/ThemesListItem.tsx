﻿import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';

type DispatchProps = {
    onThemeChange: (index: number) => void
};

type Props = {
    numberTheme: string,
    title: string,
    isSelectedItem: boolean
} & DispatchProps;

const useStyles = (isSelectedItem: boolean) => makeStyles(createStyles({
    themesListItem: {
        display: 'flex',
        justifyContent: 'flex-start',
        textDecoration: 'none',
        height: '100px',
        margin: '20px 0px',
        backgroundColor: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#AFECC8',
        }
    },
    selectedThemesListItem: {
        backgroundColor: '#F4E02D',
        '&:hover': {
            backgroundColor: '#F4E02D',
        }
    },
    numberTheme: {
        width: '50px',
        fontSize: '30px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ABABAB',
        marginRight: '10px'
    },
    selectedTextStyle: {
        color: '#FFFFFF'
    },
    titleTheme: {
        color: '#000000'
    },

}))();

/**
 * Элемент списка тем.
 * @param numberTheme Номер темы.
 * @param title Название темы.
 * @param isSelectedItem Флаг показывающий выбран ли элемент.
 * @param onThemeChange Событие вызывающийся при изменении выбранной темы.
 */
export const ThemesListItem: React.FC<Props> = ({
    numberTheme,
    title,
    isSelectedItem,
    onThemeChange
}) => {

    const classes = useStyles(isSelectedItem);

    return (
        <ListItem className={clsx(classes.themesListItem, {
            [classes.selectedThemesListItem]: isSelectedItem
        })} button 
            key={title}
            onClick={() => onThemeChange(Number(numberTheme) - 1)}>
            <div  className={clsx(classes.numberTheme, {
            [classes.selectedTextStyle]: isSelectedItem
        })}>{numberTheme}</div>
            <ListItemText  className={clsx(classes.titleTheme, {
            [classes.selectedTextStyle]: isSelectedItem
        })} primary={title} />
        </ListItem>
    );
};