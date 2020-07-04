import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const maxSize = '100%';
const baseFontFamily = 'Poly';

const useStyles = (bgImage: string) => makeStyles(createStyles({
    carouselItem: {
        display: 'block',
        width: maxSize,
        height: maxSize,
        background: `url(${bgImage}) no-repeat`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center'
    },
    header: {
        position: 'relative',
        marginLeft: '1em',
        fontSize: '5vw',
        fontFamily: baseFontFamily,
        color: 'white'
    },
    boxBtn: {
        width: maxSize,
        position: 'fixed',
        bottom: '0px',
        margin: '20px auto',
        textAlign: 'center'
    },
    centerBtn: {
        padding: '10px',
        fontFamily: baseFontFamily,
        fontWeight: 'bold',
        backgroundColor: '#72FFA4'
    }
}))();

type Props = {
    title: string,
    bgImage: string,
    btnText: string | null,
    coursePathURL: string
}

/**
 * Кмпоненты для страниц встраиваемые в карусель.
 * @param title Заголовок, оображаемый на заданном элементе карусели 
 * @param bgImage Фоновая картинка
 * @param btnText Текст, отображаемый на кнопке (опциональный)
 * @param coursePathURL URL путь к курсу.
 */
export const CarouselItem: React.FC<Props> = ({
    title,
    bgImage,
    btnText,
    coursePathURL
}) => {

    const classes = useStyles(bgImage);

    return (<div className={classes.carouselItem}>
        <label className={classes.header}>{title}</label>
        <Box className={classes.boxBtn}>
            <Button className={classes.centerBtn}
                variant="contained"
                component={NavLink}
                to={coursePathURL}>{btnText}</Button>
        </Box>
    </div>)
};