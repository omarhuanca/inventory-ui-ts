export class Coin {
    private code: string;

    static COIN_USD = "USD";
    static COIN_BS = "BS";

    constructor(potentialCode: string){
        this.code = potentialCode;
    }

    compareOtherCode(potentialCode: string): boolean {
        return this.code.toLowerCase() == potentialCode.toLowerCase();
    }

    getCode(): string {
        return this.code;
    }
}
