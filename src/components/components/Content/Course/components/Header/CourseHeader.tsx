import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FilterListContainer } from './components/Filter/FilterListContainer';
import { Course } from 'components/type';
import { IconButton, SvgIconProps, SvgIcon } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

type Props = {
    course: Course
};

const maxSize = '100%';
const baseFontFamily = 'Poly';
const pathHome = '/Home';

const useStyles = (bgImage: string) => makeStyles(createStyles({
    header: {
        minHeight: '310px',
        width: maxSize,
        background: `url(${bgImage}) no-repeat`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        boxShadow: 'inset 0px 4px 250px rgba(0, 0, 0, 0.25)'
    },
    header_top: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        marginLeft: '1em',
        fontSize: '5vw',
        fontFamily: baseFontFamily,
        color: 'white'
    },
    homeIconBtn: {
        height: maxSize,
        fontSize: '4em',
        color: '#FFFFFF',
        marginRight: '10px',
        borderRadius: maxSize
    }
}))();

function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

/**
 * Заголовок страницы курса.
 * @param course Выбранный курс.
 */
export const CourseHeader: React.FC<Props> = ({
    course
}) => {

    const classes = useStyles(course.carouselIamge);

    return (
        <div className={classes.header}>
            <div className={classes.header_top}>
                <div className={classes.title}>{course.courseName}</div>
                <IconButton
                    className={classes.homeIconBtn}
                    aria-label="open drawer"
                    component={NavLink}
                    to={pathHome}>
                    <HomeIcon fontSize="inherit" />
                </IconButton>
            </div>
            <FilterListContainer courseName={course.pathURL} />
        </div>
    )
};