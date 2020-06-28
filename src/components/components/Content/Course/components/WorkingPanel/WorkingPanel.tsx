import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ThemesList } from './components/ThemesList/ThemesList';
import { ThemeCourse } from '../../type';

type DispatchProps = {
    onThemeChange: (index: number) => void
};

type Props = {
    themesList: Array<ThemeCourse>
    selectedTheme: number,
} & DispatchProps;

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    workingPanel: {
        height: maxSize
    }
}));

export const WorkingPanel: React.FC<Props> = ({
    themesList,
    selectedTheme,
    onThemeChange
}) => {

    const classes = useStyles();

    return (
        <div className={classes.workingPanel}>
            <ThemesList themesList={themesList}
                        selectedTheme={selectedTheme}
                        onThemeChange={onThemeChange}/>
        </div>
    )
};