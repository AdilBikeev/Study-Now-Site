﻿import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ProgressCours } from './components/ProgressCourse/ProgressCourse';
import { List } from '@material-ui/core';
import { ThemesListItem } from './components/ThemesListItem';
import { ThemeCourse } from '../../../../type';
import { getCountSubThemesCompleted } from './Helpers/ProgressCourseHelpers';

type DispatchProps = {
    onThemeChange: (index: number) => void
};

type Props = {
    themesList: Array<ThemeCourse>,
    selectedTheme: number | undefined
} & DispatchProps;

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    themesListRoot: {
        minHeight: '600px',
        width: '520px',
        maxWidth: maxSize,
        backgroundColor: '#D5EDDF',
        wordBreak: 'break-all'
    },
    themesList: {
        height: '600px', 
        padding: '10px 20px',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: '1em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#F5F5F5'
        },
        '&::-webkit-scrollbar-thumb': {
            outline: '1px solid slategrey',
            borderRadius: '50px',
            backgroundColor: '#47CF73',
            backgroundImage: `-webkit-gradient(linear, 0 0, 0 100%,
                              color-stop(.5, rgba(255, 255, 255, .2)),
                                      color-stop(.5, transparent), to(transparent))`
        }
    }
}));

/**
 * Список тем с прогрессом их изучения
 * @param themesList список тем
 * @param selectedTheme индекс выбранной темы
 * @param isCompleted Флаг, указывающий на успех выполнения задания.
 */
export const ThemesList: React.FC<Props> = ({
    themesList,
    selectedTheme,
    onThemeChange
}) => {

    const classes = useStyles();

    return (
        <div className={classes.themesListRoot}>
            <ProgressCours themesList={themesList}/>
            <List className={classes.themesList}>
                {themesList.map( (element, index) => <ThemesListItem  key={index + 1}
                                                                      numberTheme={(index + 1).toString()}
                                                                      title={element.name}
                                                                      isSelectedItem={index === selectedTheme}
                                                                      isCompleted={getCountSubThemesCompleted(element.subThemesCourse) === element.subThemesCourse.length}
                                                                      onThemeChange={onThemeChange}/>)}
            </List>
        </div>
    )
};