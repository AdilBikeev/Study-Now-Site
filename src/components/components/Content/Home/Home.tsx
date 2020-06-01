import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CarouselMain } from '../../../../common/Carousel/CarouselMain';
import { CarouselItemType } from '../../../../common/Carousel/type';
import { ListBoxCourses } from './components/ListBoxCourses';
import { Course } from '../../../type';

type Props = {
    carouselItems: Array<CarouselItemType>,
    courses: Array<Course>
}

const carouselAutoPlay = true;

const useStyles = makeStyles(createStyles({
    root: {
        width: '100%',
        height: '100%'
    },
    carousel: {
        height: '42vw'
    }
}));


export const Home: React.FC<Props> = ({
    carouselItems,
    courses
}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CarouselMain
                isAutoPlay={carouselAutoPlay}
                rootClassName={classes.carousel}
                carouselItems={carouselItems} />
            <ListBoxCourses courses={courses} />
        </div>
    )
}