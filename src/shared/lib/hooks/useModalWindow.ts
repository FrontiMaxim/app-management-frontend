import { useState } from "react"

interface IUseModalWindow {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useModalWindow = (): IUseModalWindow => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return {
        isOpen,
        open,
        close
    }
}