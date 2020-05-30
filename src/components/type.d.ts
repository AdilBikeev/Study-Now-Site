import schoolImg from './../assets/School-CouruselImage.png'

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
            carouselIamge: schoolImg,
        },
        {
            courseName: 'IT',
            description: 'Здесь должно быть описание',
            carouselIamge: schoolImg,
        }
    ]
};

export type initialStateAppType = typeof initialStateApp;
