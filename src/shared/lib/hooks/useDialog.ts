import { useState } from "react"

interface IUseDialog {
    isAgree: boolean;
    agree: () => void;
    disagree: () => void;
}

export const useDialog = (): IUseDialog => {
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