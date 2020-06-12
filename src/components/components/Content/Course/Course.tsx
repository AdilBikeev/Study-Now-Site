import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Course as CourseType } from '../../../type';

type Props = {
    course: CourseType
};

const useStyles = makeStyles(createStyles({
    root: {
        width: '100%',
        height: '100%'
    }
}));


export const Course: React.FC<Props> = ({
    course
}) => {

    const classes = useStyles();
debugger;
    return (
        <div className={classes.root}>
            {course.courseName}
        </div>
    )
};