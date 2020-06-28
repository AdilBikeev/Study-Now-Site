﻿import { ON_THEME_CHANGE } from './../actions';
import { ActionType } from "../actions";
import { CoursesDescription } from "../type";

const initialStateCourse = {
    selectedTheme: 0,
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
                { name: 'Задание № 16 Планиметрия. Часть 1' },
                { name: 'Задание № 16 Планиметрия. Часть 2' },
                { name: 'Задание № 16 Планиметрия. Часть 3' },
                { name: 'Задание № 16 Планиметрия. Часть 4' },
                { name: 'Задание № 16 Планиметрия. Часть 5' },
                { name: 'Задание № 16 Планиметрия. Часть 6' }
            ]
        }
    ] as Array<CoursesDescription>
};

export const courseReducer = (state = initialStateCourse, action: ActionType): initialStateCourseType => {
    debugger;
    let copyState = JSON.parse(JSON.stringify(state)) as initialStateCourseType;

    switch (action.type) {
        case ON_THEME_CHANGE:
            copyState.selectedTheme = action.selectedTheme;
            return copyState;
        default:
            return state;
    }
};

export type initialStateCourseType = typeof initialStateCourse;