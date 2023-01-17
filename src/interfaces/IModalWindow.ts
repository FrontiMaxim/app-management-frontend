export enum ModeModalWindow {
    CREATE,
    CHANGE,
    DELETE
}

export interface IModalWindow {
    isOpen: boolean;
    mode: ModeModalWindow;
}