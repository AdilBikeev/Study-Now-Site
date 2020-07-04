import LevelKettle from "../assets/Levels/Level-Kettle.png";
import LevelGenius from "../assets/Levels/Level-Genius.png";

/**
 * Возвращает иконку, отражающая степень знаний курса.
 * @param themesCompletedCount Кол-во пройденных тем.
 * @param themesCount Кол-во тем всего.
 */
export const getProgressIcon = (themesCompletedCount: number, themesCount: number) => {
    const percentCompleted = themesCompletedCount / themesCount;

    if (percentCompleted < 1){
        return LevelKettle;
    }
    else {
        return LevelGenius;
    }
}