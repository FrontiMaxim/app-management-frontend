export class AUTHENTICATION_ERROR extends Error {
    public message: string;

    constructor(message: string) {
        super();
        this.message = message;
    }
}