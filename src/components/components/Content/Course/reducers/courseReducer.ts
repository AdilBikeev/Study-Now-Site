import { CoursesDescription } from "../type";
import { School_filterList } from "../data/School/School_filterList";
import { School_themesList } from "../data/School/School_themesList";

const initialStateCourse = {
    courseDescList: [
        {
            courseName: 'School',
            filterList: School_filterList,
            themesList: School_themesList,
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