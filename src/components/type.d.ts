import schoolImg from './../assets/School-CouruselImage.png';
import universityImg from './../assets/University-CarouselImage.jpg';
import itImg from './../assets/IT-CarouselImage.jpeg';

type Course = {
    courseName: string,
    description: string,
    carouselIamge: string
};

export const initialStateApp = {
    courses: [
        {
            courseName: 'ШКОЛА',
            description: 'Здесь должно быть описание',
            carouselIamge: schoolImg,
        },
        {
            courseName: 'ВУЗ',
            description: 'Здесь должно быть описание',
            carouselIamge: universityImg,
        },
        {
            courseName: 'IT',
            description: 'Здесь должно быть описание',
            carouselIamge: itImg,
        }
    ]
};

export type initialStateAppType = typeof initialStateApp;
