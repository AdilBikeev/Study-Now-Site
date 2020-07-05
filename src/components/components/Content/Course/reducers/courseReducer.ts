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
                        { 
                            completed: false,
                            question: `Решите уравение 
                                       7x-9=40.`,
                            theory: 'Гуглите',
                            answer: '7'
                        },
                    ]
                },
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