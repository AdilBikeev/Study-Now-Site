type Course = {
    courseName: string,
    carouselIamge: string
};

export const initialStateApp = {
    curses: [
        {
            courseName: 'ШКОЛА',
            carouselIamge: './../assets/School-CouruselImage.png',
        },
        {
            courseName: 'ВУЗ',
            carouselIamge: './../assets/School-CouruselImage.png',
        },
        {
            courseName: 'IT',
            carouselIamge: './../assets/School-CouruselImage.png',
        }
    ]
};

export type initialStateAppType = typeof initialStateApp;
