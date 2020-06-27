import { ActionType } from "../actions";
import { CoursesDescription } from "../type";

const initialStateCourse: Array<CoursesDescription> = [
    {
        courseName: 'School',
        filterList: [
            {
                placeholder: 'Класс',
                values: [ '11 класс' ]
            },
            {
                placeholder: 'Предмет',
                values: [ 'Математика' ]
            },
            {
                placeholder: 'Цель',
                values: [ 'ОГЭ', 'ЕГЭ' ]
            },
        ],
        themesList: [
            { name: 'Задание № 16 Планиметрия. Часть 1' },
            { name: 'Задание № 16 Планиметрия. Часть 2' },
            { name: 'Задание № 16 Планиметрия. Часть 3' },
            { name: 'Задание № 16 Планиметрия. Часть 4' },
            { name: 'Задание № 16 Планиметрия. Часть 5' },
            { name: 'Задание № 16 Планиметрия. Часть 6' }
        ]
    }
];

export const courseReducer = (state = initialStateCourse, action: ActionType): initialStateCourseType => {
    switch (action.type) {
        default:
            return state;
    }
};

export type initialStateCourseType = typeof initialStateCourse;