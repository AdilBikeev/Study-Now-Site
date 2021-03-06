﻿import { courseFilterList } from './data/School/School_themesList';
import { coursefilterList } from './data/courseFilterList';

/**
 * Словарь фильтров
 * @key Наименвоание фильтра
 * @value Массив доступных значений фильтра
 */
export type FilterListItem = {
    placeholder: coursefilterList, // текст/подсказка для фильтра
    values: Array<string> // набор возможных значений фильтра
};

/**
 * Объект автосгенерированного теста по заданной под-теме курса.
 */
type AutoGenerateSubThemeCourse = {
    question: string, // вопрос по заданной под-теме
    solution: string, // решение под-темы
    answer: string // Ответ по заданной под-теме
}

/**
 * Подтема курса
 */
type SubThemeCourse = {
    completed: boolean, // указывает пройдена ли подтема
    question: string, // вопрос по заданной под-теме
    solution: string, // решение под-темы
    generateInputData: () => AutoGenerateSubThemeCourse, // генерирует входные данные для задачи
    theory: string, // теория по заданной под-теме
    answer: string // Ответ по заданной под-теме
}

/**
 * Тема курса
 */
type ThemeCourse = {
    name: courseFilterList // название темы
    subThemesCourse: Array<SubThemeCourse>, // подтемы курса
}

/**
 * Описание курса
 */
export type CoursesDescription = {
    courseName: 'School', // название курса
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