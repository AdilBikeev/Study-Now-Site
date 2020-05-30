import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { CarouselItem } from './type';

const withAutoplay = require('react-awesome-slider/dist/autoplay')['default'];

type Props = {
    rootClassName: string,
    carouselItems: CarouselItem[],
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

    debugger
    const Slider = isAutoPlay ? withAutoplay(AwesomeSlider) : AwesomeSlider;


    return (
        <Slider className={rootClassName}
            play={isAutoPlay}>
            {carouselItems.map(x => (<div
                key={x.title}
                data-src={x.carouselIamge} />))}
        </Slider>
    )
}

