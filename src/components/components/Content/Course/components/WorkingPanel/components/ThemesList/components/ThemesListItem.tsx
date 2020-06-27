import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';

type Props = {
    numberTheme: string,
    title: string
};

const useStyles = makeStyles(createStyles({
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
    numberTheme: {
        width: '50px',
        fontSize: '30px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ABABAB',
        marginRight: '10px'
    },
    titleTheme: {
        
    }
}));

export const ThemesListItem: React.FC<Props> = ({
    numberTheme,
    title
}) => {

    const classes = useStyles();

    return (
        <ListItem className={classes.themesListItem} button key={title}>
            <div  className={classes.numberTheme}>{numberTheme}</div>
            <ListItemText  className={classes.titleTheme} primary={title} />
        </ListItem>
    );
};