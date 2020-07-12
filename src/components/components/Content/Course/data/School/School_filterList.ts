import { FilterListItem } from "../../type";

/**
 * Названия фильтров для курса школьников.
 */
export type School_filterName = 'Класс' | 'Предмет' | 'Цель';

/**
 * Список фильтров курса для школьников.
 */
export const School_filterList: Array<FilterListItem> = [
    /* расскомментирвоат после реализации задачи с фильтрацией тем курса
    {
        placeholder: 'Класс',
        values: ['11 класс']
    },
    {
        placeholder: 'Предмет',
        values: ['Профильная математика']
    },
    {
        placeholder: 'Цель',
        values: ['ЕГЭ']
    },*/
];