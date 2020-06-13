import { ActionType } from "../actions";
import { FilterListForCourse } from "../type";

const initialStateCourse: Array<FilterListForCourse> = [
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