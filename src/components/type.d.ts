﻿import schoolImg from './../assets/School-CouruselImage.png';
import universityImg from './../assets/University-CarouselImage.jpg';
import itImg from './../assets/IT-CarouselImage.jpeg';
import mathIcon from './../assets/Math-icon.png';
import physicsIcon from './../assets/Physics-Icon.png';
import vkIcon from './../assets/vk_icon.png'
import youtubeIcon from './../assets/youtube_icon.png'
import telegramIcon from './../assets/telegram_icon.png'

type SubCourse = {
    icon: string,
    subCoursName: string
};

type Course = {
    courseName: string,
    description: string,
    carouselIamge: string,
    subCourses: Array<SubCourse>
};

export const initialStateApp = {
    courses: [
        {
            courseName: 'ШКОЛА',
            description: 'Здесь должно быть описание',
            carouselIamge: schoolImg,
            subCourses: [
                {
                    icon: mathIcon,
                    subCoursName: 'Математика',
                },
                {
                    icon: physicsIcon,
                    subCoursName: 'Физика',
                }
            ]
        },
        {
            courseName: 'ВУЗ',
            description: 'Здесь должно быть описание',
            carouselIamge: universityImg,
            subCourses: [
                {
                    icon: mathIcon,
                    subCoursName: 'Высшая математика',
                },
                {
                    icon: physicsIcon,
                    subCoursName: 'Электронника',
                }
            ]
        },
        {
            courseName: 'IT',
            description: 'Здесь должно быть описание',
            carouselIamge: itImg,
            subCourses: [
                {
                    icon: mathIcon,
                    subCoursName: '3D-моделирование',
                },
                {
                    icon: physicsIcon,
                    subCoursName: 'Atomic Design',
                }
            ]
        }
    ] as Array<Course>,
    contactsBlock: {
        title: 'Контакты',
        phoneBlock: {
            title: 'Телефон: ',
            phoneNumber: '8(800) 555-35-35'
        },
        addressBlock: {
            title: 'Адрес: ',
            address: 'ул. Пушкина, д. Колотушкина'
        },
        socialNets: [
            {
                icon: vkIcon,
                link: 'https://vk.com/studyrtu'
            },
            {
                icon: youtubeIcon,
                link: 'https://www.youtube.com/channel/UCrWE72gXKcgbFliiZSw7H4w?view_as=subscriber'
            },
            {
                icon: telegramIcon,
                link: 'https://google.com'
            }
        ]
    },
    copyRightText: '2020 ©, Study-Now, все права защищены'
};

export type initialStateAppType = typeof initialStateApp;
