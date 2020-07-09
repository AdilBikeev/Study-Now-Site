/**
 * Возвращает рандомное число в заданном диапозоне.
 * @param min Нижняя граница значений.
 * @param max Верхняя граница значений.
 */
export const getRandomArbitrary = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
}