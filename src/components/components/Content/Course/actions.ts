import { InferActionsTypes } from '../../../store';


export const ON_THEME_CHANGE = 'ON_THEME_CHANGE';

/**
 * Изменяет индекс выбранной темы курса
 * @param idnex Индекс выбранного курса
 */
export const onThemeChange = (index: number) => ({ type: ON_THEME_CHANGE, selectedTheme: index });

/**
 * Action Creators
 */
const actions = {
    onThemeChange
}

export type ActionType = InferActionsTypes<typeof actions>;