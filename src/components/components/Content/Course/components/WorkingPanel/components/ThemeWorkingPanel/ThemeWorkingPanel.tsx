import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { SubThemesList } from './components/SubThemesList';
import { SubThemeCourse, ThemeCourse } from '../../../../type';
import { DropThemesMenu } from './components/DropThemesMenu';

type DispatchProps = {
    onThemeChange: (index: number) => void
};

type Props = {
    subThemesList: Array<SubThemeCourse>,
    themesList: Array<ThemeCourse>,
    selectedTheme: number
} & DispatchProps;

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    themeWorkingPanel: {
        height: maxSize,
        width: maxSize,
        minHeight: '710px',
        backgroundColor: 'blue'
    }
}));

/**
 * Рабочая область ознакомления с темой курса
 * @param subThemesList Список подтем.
 * @param themesList Список тем курса.
 * @param selectedTheme Индекс выбранной темы.
 * @param onThemeChange Событие вызывающийся при изменении выбранной темы.
 */
export const ThemeWorkingPanel: React.FC<Props> = ({
    subThemesList,
    themesList,
    selectedTheme,
    onThemeChange
}) => {

    const classes = useStyles();

    const [selectedSubTheme, onSubThemeChange] = useState(0); // выбранная под-тема
    const [isOpen, toggleDrawer] = useState(false);

    if (selectedSubTheme >= subThemesList.length) {
        onSubThemeChange(0);
    }

    return (
        <div className={classes.themeWorkingPanel}>
            <SubThemesList subThemesList={subThemesList}
                selectedSubTheme={selectedSubTheme}
                onSubThemeChange={onSubThemeChange}
                toggleDrawer={toggleDrawer} />

            <React.Fragment>
                <DropThemesMenu isOpen={isOpen}
                                toggleDropRightMenu={toggleDrawer} 
                                themesList={themesList}
                                selectedTheme={selectedTheme}
                                onThemeChange={onThemeChange}/>
            </React.Fragment>
        </div>
    )
};