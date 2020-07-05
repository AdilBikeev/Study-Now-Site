import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Course as CourseType } from '../../../type';
import { WorkingPanelContainer } from './components/WorkingPanel/WorkingPanelContainer';
import { CourseHeader } from './components/Header/CourseHeader';

type Props = {
    course: CourseType
};

const maxSize = '100%';

const useStyles = (bgImage: string) => makeStyles(createStyles({
    root: {
        display: 'block',
        width: maxSize
    },
    filterList: {
        display: 'flex',
        height: maxSize,
        width: maxSize,
    },
    filterListItem: {
        backgroundColor: 'white',
        margin: '5px',
        padding: '5px',
        flex: '1 1 auto',
        alignSelf: 'flex-end'
    }
}))();

/**
 * Страница курса.
 * @param course Выбранный курс.
 */
export const Course: React.FC<Props> = ({
    course
}) => {

    const classes = useStyles(course.carouselIamge);

    return (
        <div className={classes.root}>
            <CourseHeader course={course}/>
            <WorkingPanelContainer courseName={course.pathURL}/>
        </div>
    )
};