import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Course as CourseType } from '../../../type';
import { FilterListContainer } from './components/Filter/FilterListContainer';
import { WorkingPanel } from './components/WorkingPanel/WorkingPanel';

type Props = {
    course: CourseType
};

const maxSize = '100%';
const baseFontFamily = 'Poly';

const useStyles = (bgImage: string) => makeStyles(createStyles({
    root: {
        display: 'block',
        width: maxSize
    },
    header: {
        display: 'flex',
        flexFlow: 'column',
        minHeight: '310px',
        width: maxSize,
        background: `url(${bgImage}) no-repeat`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        boxShadow: 'inset 0px 4px 250px rgba(0, 0, 0, 0.25)'
    },
    title: {
        marginLeft: '1em',
        fontSize: '5vw',
        fontFamily: baseFontFamily,
        color: 'white'
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


export const Course: React.FC<Props> = ({
    course
}) => {

    const classes = useStyles(course.carouselIamge);

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.title}>{course.courseName}</div>
                <FilterListContainer courseName={course.pathURL}/>
            </div>
            <WorkingPanel />
        </div>
    )
};