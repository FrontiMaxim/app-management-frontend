import { useState } from "react"

type TUseLoacalStorage<T> = [
    value:  T | undefined,
    changeValue: (value: T) => void
];

export const useLoacalStorage = <T>(key: string, defaultValue?: T): TUseLoacalStorage<T> => {

    const initializeState = (): T | undefined => {
        const storage = localStorage.getItem(key);

        if(storage) {
            try {
                return JSON.parse(storage);
            } catch {
                return storage as T;
            }
        } else {
            return defaultValue;
        }
    }

    const [value, setValue] = useState<T | undefined>(initializeState);

    const changeValue = (value: T) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [
        value,
        changeValue
    ]          
}