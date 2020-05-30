import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CarouselMain } from '../../../../common/Carousel/CarouselMain';
import { CarouselItemType } from '../../../../common/Carousel/type';

type Props = {
    courses: Array<CarouselItemType>
}

const carouselAutoPlay = true;

const useStyles = makeStyles(createStyles({
    root: {
        width: '100%',
        height: '100%'
    },
    carousel: {
        height: '600px'
    }
}));


export const Home: React.FC<Props> = ({
    courses
}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CarouselMain
                isAutoPlay={carouselAutoPlay}
                rootClassName={classes.carousel}
                carouselItems={courses} />
        </div>
    )
}