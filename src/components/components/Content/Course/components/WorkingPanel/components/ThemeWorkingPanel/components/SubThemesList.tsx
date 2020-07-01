import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import clsx from 'clsx';
import { SubThemeCourse } from '../../../../../type';

type DispatchProps = {
    onSubThemeChange: (index: number) => void
};

type Props = {
    subThemesList: Array<SubThemeCourse>,
    selectedSubTheme: number | undefined
} & DispatchProps;

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
            backgroundColor: '#AFECC8',
        }
    },
    subThemesListItem_selected: {
        backgroundColor: '#F4E02D'
    },
    subThemesListItem_completed: {
        backgroundColor: '#72FFA4'
    },
    subThemesListItemText: {
        margin: '0 auto'
    }
}));

/**
 * Список под тем по заданной теме курса
 */
export const SubThemesList: React.FC<Props> = ({
    subThemesList,
    selectedSubTheme,
    onSubThemeChange
}) => {

    const classes = useStyles();

    return (
        <List className={classes.subThemesList}>
            { subThemesList.map( (subTheme, index) => (<ListItem className={clsx(classes.subThemesListItem, {
                [classes.subThemesListItem_completed]: subTheme.completed && index !== selectedSubTheme,
                [classes.subThemesListItem_selected]: index === selectedSubTheme
            })}
                key={index} button
                onClick={() => onSubThemeChange(index)}>
                <span className={classes.subThemesListItemText}>{index}</span>
            </ListItem>))}
        </List>
    )
};