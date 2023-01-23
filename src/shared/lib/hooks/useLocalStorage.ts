import { useEffect, useState } from "react"

export const useLoacalStorage = <T>(key: string, defaultValue?: T) => {

    function initializeState(): T | undefined {
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

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key]);

    return [
        value,
        setValue
    ]          
}