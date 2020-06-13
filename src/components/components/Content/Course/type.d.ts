/**
 * Описание единного фильтра курса
 */
export type FilterListItem = {
    placeholder: string, // текст/подсказка для фильтра
    values: Array<string> // набор возможных значений фильтра
};

/**
 * 
 */
type FilterListForCourse = {
    courseName: string, // название курса
    filterList: Array<FilterListItem> // список фильтров
};

/**
 * Словарь, хранящий информацию о том, какое значение принимает тот или иной фильрт
 */
export interface FilterValuesDictionary {
    [Key: string]: string;
}