﻿import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ThemesList } from './components/ThemesList/ThemesList';
import { ThemeCourse } from '../../type';

type Props = {
    themesList: Array<ThemeCourse>
    selectedTheme: number
};

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    workingPanel: {
        height: maxSize
    }
}));

export const WorkingPanel: React.FC<Props> = ({
    themesList,
    selectedTheme
}) => {

    const classes = useStyles();

    return (
        <div className={classes.workingPanel}>
            <ThemesList themesList={themesList}
                        selectedTheme={selectedTheme}/>
        </div>
    )
};