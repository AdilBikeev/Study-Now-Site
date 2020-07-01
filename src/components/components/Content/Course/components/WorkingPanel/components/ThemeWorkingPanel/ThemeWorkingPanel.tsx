import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { SubThemesList } from './components/SubThemesList';
import { SubThemeCourse } from '../../../../type';

type Props = {
    subThemesList: Array<SubThemeCourse>
};

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    themeWorkingPanel: {
        height: maxSize,
        width: maxSize,
        backgroundColor: 'blue'
    }
}));

/**
 * Рабочая область ознакомления с темой курса
 */
export const ThemeWorkingPanel: React.FC<Props> = ({
    subThemesList,
}) => {

    const classes = useStyles();

    const [selectedSubTheme, onSubThemeChange] = useState(0); // выбранная под-тема

    if (selectedSubTheme >= subThemesList.length)
    {
        onSubThemeChange(0);
    }

    return (
        <div className={classes.themeWorkingPanel}>
            <SubThemesList subThemesList={subThemesList}
                           selectedSubTheme={selectedSubTheme}
                           onSubThemeChange={onSubThemeChange}/>
        </div>
    )
};