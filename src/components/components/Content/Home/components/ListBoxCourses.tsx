import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';

import { Course } from '../../../../type';
import { ListSubCourse } from './ListSubCourses';

type Props = {
    courses: Array<Course>
};

type selectCourseBtnType = {
    text: string,
    color: "secondary" | "inherit" | "default" | "primary" | undefined
};

const selectCourseBtn: selectCourseBtnType = {
    text: 'Перейти',
    color: 'secondary'
};

const useStyles = makeStyles(createStyles({
    listBoxCourses: {
        display: 'flex',
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
        margin: '100px 20px',
        flexWrap: 'wrap'
    },
    listBoxItem: {
        width: '25vw',
        height: '20em',
        minWidth: '230px',
        maxHeight: '500px',
        backgroundColor: '#FFFFFF',
        margin: '50px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)'
    },
    listItemTitle: {
        minWidth: '210px',
        color: '#FFFFFF',
        padding: '10px',
        fontFamily: 'Scada',
        backgroundColor: '#F4E02D',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)'
    },
    selectCourseBtn: {
        color: '#FFFFFF',
        backgroundColor: '#EF6767',
        borderRadius: '50px'
    }
}));

/**
 * Список блочных курсов.
 * @param courses список курсов. 
 */
export const ListBoxCourses: React.FC<Props> = ({
    courses
}) => {

    const classes = useStyles();

    return (
        <Box className={classes.listBoxCourses}>
            {courses.map(x => (<Box className={classes.listBoxItem}
                key={x.courseName}>
                <Typography variant="h4" noWrap className={classes.listItemTitle}>{x.courseName}</Typography>
                <ListSubCourse subCourses={x.subCourses} />
                <Box>
                    <Button className={classes.selectCourseBtn}
                        variant="contained"
                        color={selectCourseBtn.color}>{selectCourseBtn.text}</Button>
                </Box>
            </Box>)
            )}
        </Box>
    )
}