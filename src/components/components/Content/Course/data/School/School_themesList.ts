import { ThemeCourse } from "../../type";
import { School_subTheme_1 } from "./SubThemesCourse/School_subTheme_1";

/**
 * Название темы курса школьников.
 */
export type School_themeName = 'Задание № 1 Про­стей­шие текстовые задачи';

export const School_themesList: ThemeCourse[] = [
    { 
        name: 'Задание № 1 Про­стей­шие текстовые задачи',
        subThemesCourse: School_subTheme_1
    },
];