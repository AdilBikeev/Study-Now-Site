/**
 * Описание единного фильтра курса
 */
export type FilterListItem = {
    placeholder: string, // текст/подсказка для фильтра
    values: Array<string> // набор возможных значений фильтра
};

/**
 * Тема курса
 */
type ThemeCourse = {
    name: string // название темы
}

/**
 * Описание курса
 */
export type CoursesDescription = {
    courseName: string, // название курса
    filterList: Array<FilterListItem> // список фильтров
    themesList: Array<ThemeCourse> // список тем 
};

/**
 * Словарь, хранящий информацию о том, какое значение принимает тот или иной фильрт
 */
export interface FilterValuesDictionary {
    [Key: string]: string;
}