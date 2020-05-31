import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

import { Course, SubCourse } from '../../../../type';

type Props = {
    courses: Array<Course>
}


const useStyles = makeStyles(createStyles({
    listBoxCourses: {
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        margin: '100px 20px',
        flexWrap: 'wrap'
    },
    listBoxItem: {
        width: '230px',
        height: '200px',
        backgroundColor: '#FFFFFF',
        margin: '30px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)'
    },
    listItemTitle: {
        width: '210px',
        color: '#FFFFFF',
        padding: '10px',
        fontFamily: 'Scada',
        backgroundColor: '#F4E02D',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)'
    },
    subListNav: {
        margin: '10px'
    },
    sublistItemText: {
        fontFamily: 'Scada',
    }
}));

export const ListBoxCourses: React.FC<Props> = ({
    courses
}) => {

    const classes = useStyles();

    const getSubCourses = (course: Course): JSX.Element[] => {
        debugger
        let subCourses: Array<SubCourse> = course.subCourses;
        return subCourses.map(y => (<ListItem>
            <ListItemIcon>
                <img src={y.icon} alt={y.subCoursName} />
            </ListItemIcon>
            <ListItemText className={classes.sublistItemText}
                primary={y.subCoursName} />
        </ListItem>));
    };
    

    return (
        <Box className={classes.listBoxCourses}>
            {courses.map(x => (<Box className={classes.listBoxItem}>
                <Typography variant="h5" noWrap className={classes.listItemTitle}>{x.courseName}</Typography>
                <List className={classes.subListNav}
                    component="nav">
                    {getSubCourses(x)}
                </List>
            </Box>)
            )}
        </Box>
    )
}