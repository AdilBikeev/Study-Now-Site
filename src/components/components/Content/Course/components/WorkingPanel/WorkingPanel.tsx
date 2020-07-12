import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ThemesList } from './components/ThemesList/ThemesList';
import { ThemeCourse } from '../../type';
import { ThemeWorkingPanel } from './components/ThemeWorkingPanel/ThemeWorkingPanel';
import { Hidden } from '@material-ui/core';

type DispatchProps = {
    setCompletedSubTheme: (isCompleted:boolean, themeCourseIndex: number, subThemeCourseIndex: number) => void
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
    themesList,
    setCompletedSubTheme
}) => {

    const classes = useStyles();

    const [selectedTheme, onThemeChange] = useState(0); // выбранная тема
    const [themesListState, updateThemesListState] = useState(themesList); // Для обновления панели с темами и прогесса
    const setCompleted = (isCompleted:boolean, subThemeCourseIndex: number) => {
        setCompletedSubTheme(isCompleted, selectedTheme, subThemeCourseIndex);
        updateThemesListState([...themesList]);
    };

    return (
        <div className={classes.workingPanel}>
            <Hidden lgDown>
                <ThemesList themesList={themesListState}
                    selectedTheme={selectedTheme}
                    onThemeChange={onThemeChange} />
            </Hidden>
            <ThemeWorkingPanel subThemesList={themesListState[selectedTheme].subThemesCourse} 
                               themesList={themesListState}
                               selectedTheme={selectedTheme}
                               onThemeChange={onThemeChange}
                               setCompletedSubTheme={setCompleted}/>
        </div>
    )
};