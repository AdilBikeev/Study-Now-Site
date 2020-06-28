import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';

type Props = {
    numberTheme: string,
    title: string,
    isSelectedItem: boolean
};

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
        
    },

}))();

export const ThemesListItem: React.FC<Props> = ({
    numberTheme,
    title,
    isSelectedItem
}) => {

    const classes = useStyles(isSelectedItem);

    return (
        <ListItem className={clsx(classes.themesListItem, {
            [classes.selectedThemesListItem]: isSelectedItem
        })} button key={title}>
            <div  className={clsx(classes.numberTheme, {
            [classes.selectedTextStyle]: isSelectedItem
        })}>{numberTheme}</div>
            <ListItemText  className={clsx(classes.titleTheme, {
            [classes.selectedTextStyle]: isSelectedItem
        })} primary={title} />
        </ListItem>
    );
};