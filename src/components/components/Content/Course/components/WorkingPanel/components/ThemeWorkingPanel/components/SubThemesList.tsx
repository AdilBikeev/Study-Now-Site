import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

type Props = {
};

const maxSize = '100%';
const circleSize = '60px';

const useStyles = makeStyles(createStyles({
    subThemesList: {
        display: 'flex',
        height: '90px',
        width: maxSize,
        backgroundColor: '#EF6767',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '0px'
    },
    subThemesListItem: {
        maxWidth: circleSize,   
        height: circleSize,
        border: '4px solid #000000',    
        borderRadius: maxSize,
        backgroundColor: '#C5C5C5',
        padding: '0px',
        fontSize: '35px',
        '&:hover': {
            backgroundColor: '#F4E02D',
        }
    },
    subThemesListItemText: {
        margin: '0 auto'
    }
}));

/**
 * Список под тем по заданной теме курса
 */
export const SubThemesList: React.FC<Props> = () => {

    const classes = useStyles();

    const subThemesList = [
        { completed: true },
        { completed: false },
        { completed: false },
    ]

    return (
        <List className={classes.subThemesList}>
            { subThemesList.map( (subTheme, index) => (<ListItem className={classes.subThemesListItem}
                                                                    key={index} button>
                <span className={classes.subThemesListItemText}>{index}</span>
            </ListItem>))}
        </List>
    )
};