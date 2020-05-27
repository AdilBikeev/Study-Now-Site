import React from 'react';
import s from './Home.module.css';
import { Carousel } from './components/Carousel';
import { CarouselItem } from './components/type';

type Props = {
    courses: Array<CarouselItem>
}

export const Home: React.FC<Props> = ({
    courses
}) => {

    return (
        <div className={s.home}>
            Домашняя страница
            <Carousel carouselItems={courses}/>
        </div>
    )
}