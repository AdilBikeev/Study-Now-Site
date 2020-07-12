import { CoursesDescription } from "../type";
import { School_filterList } from "../data/School/School_filterList";
import { School_themesList } from "../data/School/School_themesList";
import { CHECK_USER_ANSWER, ActionType } from "../actions";

const initialStateCourse = {
    courseDescList: [
        {
            courseName: 'School',
            filterList: School_filterList,
            themesList: School_themesList,
        }
    ] as Array<CoursesDescription>
};

export const courseReducer = (state = initialStateCourse, action: ActionType): initialStateCourseType => {
    switch (action.type) {
        case CHECK_USER_ANSWER:

            let copyState = {
                ...state,
            };

            copyState.courseDescList[action.coursDescIndex]
                     .themesList[action.themeCourseIndex]
                     .subThemesCourse[action.subThemeCourseIndex].completed = action.isCompleted;
            copyState.courseDescList[action.coursDescIndex].themesList =  [...copyState.courseDescList[action.coursDescIndex].themesList];

            return copyState;
        default:
            return state;
    }
};

export type initialStateCourseType = typeof initialStateCourse;