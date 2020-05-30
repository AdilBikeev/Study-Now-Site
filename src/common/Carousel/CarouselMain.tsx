import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { CarouselItemType, Media } from './type';
import { CarouselItem } from './components/CarouselItem';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(createStyles({
    itemsMedia: {
        width: '100%',
        height: '100%'
    }
}));

const withAutoplay = require('react-awesome-slider/dist/autoplay')['default'];

type Props = {
    rootClassName: string,
    carouselItems: CarouselItemType[],
    isAutoPlay: boolean
}

/**
 * Карусель картинок
 * Full documentation: https://github.com/rcaferati/react-awesome-slider
 * @param rootClassName Название класса из таблиц стилей 
 * @param carouselItems Массив из элементов карусели
 */
export const CarouselMain: React.FC<Props> = ({
    rootClassName,
    carouselItems,
    isAutoPlay
}) => {

    const classes = useStyles();

    const Slider = isAutoPlay ? withAutoplay(AwesomeSlider) : AwesomeSlider;

    const itemsMedia: Array<Media> = carouselItems.map(x => ({
        slug: '',
        className: classes.itemsMedia,
        children: <CarouselItem title={x.title}
        bgImage={x.carouselIamge}
        btnText='Перейти'/>
    }));

    return (
        <Slider className={rootClassName}
            play={!isAutoPlay}
            media={itemsMedia}>
        </Slider>
    )
}

