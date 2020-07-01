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
                    subThemesCourse: []
                },

                { 
                    name: 'Задание № 16 Планиметрия. Часть 2',
                    subThemesCourse: []
                },
            ]
        }
    ] as Array<CoursesDescription>
};

export const courseReducer = (state = initialStateCourse, action: any): initialStateCourseType => {

    let copyState = JSON.parse(JSON.stringify(state)) as initialStateCourseType;

    switch (action.type) {
        default:
            return state;
    }
};

export type initialStateCourseType = typeof initialStateCourse;