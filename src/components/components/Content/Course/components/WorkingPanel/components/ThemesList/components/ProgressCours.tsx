import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type Props = {

};

const useStyles = makeStyles(createStyles({
    progressCours: {
        display: 'flex',
        height: '90px',
        backgroundColor: '#EF6767',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export const ProgressCours: React.FC<Props> = () => {

    const classes = useStyles();

    return (
        <div className={classes.progressCours}>
            Темы
        </div>
    )
};