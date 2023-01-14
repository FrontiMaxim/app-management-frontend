import { useState } from "react"

interface IUseDialogWindow {
    isAgree: boolean;
    agree: () => void;
    disagree: () => void;
}

export const useDialogWindow = (): IUseDialogWindow => {
    const [isAgree, setIsAgree] = useState<boolean>(false);

    function agree(): void {
        setIsAgree(true);
    }

    function disagree(): void {
        setIsAgree(false);
    }

    return {
        isAgree,
        agree,
        disagree
    }
}