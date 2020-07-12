﻿import { InferActionsTypes } from 'components/store'


/**
 * Action Types
 */
export const CHECK_USER_ANSWER = 'CHECK_USER_ANSWER';


/**
 * Action Creators
 */
export const actions = {
    /**
    * Устанавливает значение completed = true для заданной подтемы.
    * @param isCompleted Флаг, указывающий на успех выполнения задания.
    * @param coursDescIndex Индекс курса в списках курса.
    * @param themeCourseIndex Индекс курса в списках тем курса.
    * @param subThemeCourseIndex Индекс курса в списках под-тем курса.
    */
    setCompletedSubTheme: (isCompleted: boolean, coursDescIndex: number, themeCourseIndex: number, subThemeCourseIndex: number) => 
    ({ type: CHECK_USER_ANSWER, isCompleted, coursDescIndex,  themeCourseIndex, subThemeCourseIndex})
}

export type ActionType = InferActionsTypes<typeof actions>;