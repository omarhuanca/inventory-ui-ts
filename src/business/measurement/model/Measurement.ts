export class Measurement {
    static CODE_DOC = "DOC";
    static CODE_PZA = "PZA";

    private code: string;
    
    constructor(code: string){
        this.code = code;
    }

    getCode(): string {
        return this.code;
    }

    compareOtherCode(potentialCode: string): boolean {
        return this.code.trim().toLowerCase() == potentialCode.trim().toLowerCase();
    }
}
