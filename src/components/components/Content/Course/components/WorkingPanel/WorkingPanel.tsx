import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ThemesList } from './components/ThemesList/ThemesList';
import { ThemeCourse } from '../../type';
import { ThemeWorkingPanel } from './components/ThemeWorkingPanel/ThemeWorkingPanel';

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

export const WorkingPanel: React.FC<Props> = ({
    themesList
}) => {

    const classes = useStyles();

    const [selectedTheme, onThemeChange] = useState(0); // выбранная тема
    const [selectedSubTheme, onSubThemeChange] = useState(0); // выбранная под-тема

    return (
        <div className={classes.workingPanel}>
            <ThemesList themesList={themesList}
                        selectedTheme={selectedTheme}
                        onThemeChange={onThemeChange}/>
            <ThemeWorkingPanel subThemesList={themesList[selectedTheme].subThemesCourse}
                               selectedSubTheme={selectedSubTheme}
                               onSubThemeChange={onSubThemeChange} />
        </div>
    )
};