/**
 * Описание единного фильтра курса
 */
export type FilterListItem = {
    placeholder: string, // текст/подсказка для фильтра
    values: Array<string> // набор возможных значений фильтра
};

/**
 * Подтема курса
 */
type SubThemeCourse = {
    completed: boolean, // указывает пройдена ли подтема
    question: string, // вопрос по заданной под-теме
    theory: string, // теория по заданной под-теме
    answer: string // Ответ по заданной под-теме
}

/**
 * Тема курса
 */
type ThemeCourse = {
    name: string // название темы
    subThemesCourse: Array<SubThemeCourse>, // подтемы курса
}

/**
 * Описание курса
 */
export type CoursesDescription = {
    courseName: string, // название курса
    filterList: Array<FilterListItem> // список фильтров
    themesList: Array<ThemeCourse> // список тем 
    progressIcon: string // путь к иконке, отражающую степень знаний курса
};

/**
 * Словарь, хранящий информацию о том, какое значение принимает тот или иной фильрт
 */
export interface FilterValuesDictionary {
    [Key: string]: string;
}