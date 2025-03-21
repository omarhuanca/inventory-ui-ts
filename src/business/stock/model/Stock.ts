import { Measurement } from "../../measurement/model/Measurement";

export class Stock {   
    static INVALID_VALUE = "INVALID VALUD";

    private value: number;
    private measurement: Measurement;

    constructor(value: number, measurement: Measurement){
        this.value = value;
        this.measurement = measurement;
    }

    getValue(): number {
        return this.value;
    }

    setValue(potentialValue: number) {
        this.value = potentialValue;
    }

    getMeasurement(): Measurement {
        return this.measurement;
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
