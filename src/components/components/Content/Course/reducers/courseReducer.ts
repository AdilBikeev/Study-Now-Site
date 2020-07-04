import { CoursesDescription } from "../type";

const initialStateCourse = {
    courseDescList: [
        {
            courseName: 'School',
            filterList: [
                {
                    placeholder: 'Класс',
                    values: ['11 класс']
                },
                {
                    placeholder: 'Предмет',
                    values: ['Математика']
                },
                {
                    placeholder: 'Цель',
                    values: ['ОГЭ', 'ЕГЭ']
                },
            ],
            themesList: [
                { 
                    name: 'Задание № 16 Планиметрия. Часть 1',
                    subThemesCourse: [
                        { completed: false },
                        { completed: true },
                        { completed: true }
                    ]
                },
                { 
                    name: 'Задание № 16 Планиметрия. Часть 2',
                    subThemesCourse: [
                        { completed: false },
                    ]
                },
                { 
                    name: 'Задание № 16 Планиметрия. Часть 3',
                    subThemesCourse: [
                        { completed: false },
                        { completed: false },
                        { completed: false },
                        { completed: false },
                    ]
                }
            ],
        }
    ] as Array<CoursesDescription>
};

export const courseReducer = (state = initialStateCourse, action: any): initialStateCourseType => {
    switch (action.type) {
        default:
            return state;
    }
};

export type initialStateCourseType = typeof initialStateCourse;