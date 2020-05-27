import React, { useState } from 'react';
import { CarouselItem } from './type';
import { Button } from '@material-ui/core';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

type Props = {
    carouselItems: Array<CarouselItem>
};

export const Carousel: React.FC<Props> = ({
    carouselItems
}) => {

    const [open, setVisible] = useState(true);
    
    
    const toggleVisibleCarousel = () => {
        setVisible(!open);
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: 500 }}>
            <Button onClick={() => toggleVisibleCarousel()}>Open carousel</Button>
            <AutoRotatingCarousel
                label='Get started'
                open={open}
                onClose={() => toggleVisibleCarousel()}
                onStart={() => toggleVisibleCarousel()}
                mobile
                autoplay={false}
                style={{ position: 'absolute' }}
            ></AutoRotatingCarousel>
        </div>
    )
}

