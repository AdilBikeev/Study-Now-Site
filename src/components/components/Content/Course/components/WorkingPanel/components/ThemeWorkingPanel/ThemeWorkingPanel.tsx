import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { SubThemesList } from './components/SubThemesList';
import { SubThemeCourse } from '../../../../type';

type DispatchProps = {
    onSubThemeChange: (index: number) => void
};

type Props = {
    subThemesList: Array<SubThemeCourse>
    selectedSubTheme: number | undefined
} & DispatchProps;

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
    selectedSubTheme,
    onSubThemeChange
}) => {

    const classes = useStyles();

    return (
        <div className={classes.themeWorkingPanel}>
            <SubThemesList subThemesList={subThemesList}
                           selectedSubTheme={selectedSubTheme}
                           onSubThemeChange={onSubThemeChange}/>
        </div>
    )
};