import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ThemesList } from './components/ThemesList/ThemesList';

type Props = {

};

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    workingPanel: {
        height: maxSize
    }
}));

export const WorkingPanel: React.FC<Props> = () => {

    const classes = useStyles();

    return (
        <div className={classes.workingPanel}>
            <ThemesList />
        </div>
    )
};