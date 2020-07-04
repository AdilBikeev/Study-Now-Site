import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ThemesList } from './components/ThemesList/ThemesList';
import { ThemeCourse } from '../../type';
import { ThemeWorkingPanel } from './components/ThemeWorkingPanel/ThemeWorkingPanel';
import { Hidden } from '@material-ui/core';

type DispatchProps = {

};

type Props = {
    themesList: Array<ThemeCourse>
} & DispatchProps;

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    workingPanel: {
        height: maxSize,
        display: 'flex',
    }
}));

/**
 * Рабочая область
 * @param themesList Список тем курса. 
 */
export const WorkingPanel: React.FC<Props> = ({
    themesList
}) => {

    const classes = useStyles();

    const [selectedTheme, onThemeChange] = useState(0); // выбранная тема

    return (
        <div className={classes.workingPanel}>
            <Hidden lgDown>
                <ThemesList themesList={themesList}
                    selectedTheme={selectedTheme}
                    onThemeChange={onThemeChange} />
            </Hidden>
            <ThemeWorkingPanel subThemesList={themesList[selectedTheme].subThemesCourse} 
                               themesList={themesList}
                               selectedTheme={selectedTheme}
                               onThemeChange={onThemeChange}/>
        </div>
    )
};