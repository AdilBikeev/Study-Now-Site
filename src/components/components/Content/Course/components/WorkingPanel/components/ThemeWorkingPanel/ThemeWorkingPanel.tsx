import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { SubThemesList } from './components/SubThemesList';

type Props = {
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
export const ThemeWorkingPanel: React.FC<Props> = () => {

    const classes = useStyles();

    return (
        <div className={classes.themeWorkingPanel}>
            <SubThemesList />
        </div>
    )
};