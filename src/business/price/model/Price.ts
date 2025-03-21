import { Coin } from "../../coin/model/Coin";

export class Price {
    private value: number;
    private coin: Coin;

    constructor(value: number, coin: Coin){
        this.value = value;
        this.coin = coin;
    }

    getValue(){
        return this.value;
    }

    getCoin(){
        return this.coin;
    }

    compareOtherValue(potentialValue: number): boolean {
        return this.value == potentialValue;
    }

    isNegativeValue(): boolean {
        return 0 > this.value;
    }

    compareOtherCode(potentialCode: string): boolean {
        return this.coin.compareOtherCode(potentialCode);
    }
}
