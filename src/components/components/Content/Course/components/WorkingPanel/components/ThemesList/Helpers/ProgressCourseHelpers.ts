import { ThemeCourse, SubThemeCourse } from "../../../../../type";

/**
 * Возвращает кол-во пройденных под-тем.
 * @param subThemesList Список под-тем.
 */
export const getCountSubThemesCompleted = (subThemesList: Array<SubThemeCourse>) => {
    return subThemesList.filter(subTheme => subTheme.completed).length;
}

/**
 * Возвращает кол-во пройденных тем курса.
 * @param themesList Список тем курса.
 */
export const getCountCompletedThemes = (themesList: Array<ThemeCourse>) => {
    return themesList.filter(theme => getCountSubThemesCompleted(theme.subThemesCourse) === theme.subThemesCourse.length).length;
}
