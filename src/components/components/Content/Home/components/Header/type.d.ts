/**
 * Интерфейс для описания выподающего меню
 */
type DropRightMenu = {
    title: string,
    cursesName: Array<string>,
    isOpen: boolean
};


export type initialStateHeaderType = DropRightMenu;
