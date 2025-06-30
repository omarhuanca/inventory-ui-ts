export class Stock {   
    static INVALID_VALUE = "INVALID VALUD";

    private value: number;

    constructor(value: number){
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    setValue(potentialValue: number) {
        this.value = potentialValue;
    }

    verifyGreaterStock(potentialValue: number): boolean {
        return this.value >= potentialValue;
    }

    decrementValue(potentialValue: number): void {
        if (this.value < potentialValue)
            throw new Error(Stock.INVALID_VALUE);
        this.setValue(this.getValue() - potentialValue)
    }
}
