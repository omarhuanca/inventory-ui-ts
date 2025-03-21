import { Measurement } from "../../../src/business/measurement/model/Measurement";
import { Stock } from "../../../src/business/stock/model/Stock";

describe("Stock suit validation", () => {
    test("verifyParamLessThanStockFailure", () => {
        const measurement = new Measurement(Measurement.CODE_PZA);
        const stock = new Stock(5, measurement);

        expect(stock.verifyGreaterStock(3)).toBeTruthy();
    });
    test("verifyParamEqualStockSuccess", () => {
        const measurement = new Measurement(Measurement.CODE_PZA);
        const stock = new Stock(5, measurement);

        expect(stock.verifyGreaterStock(5)).toBeTruthy();
    });
    test("verifyParamGreaterThanStockSuccess", () => {
        const measurement = new Measurement(Measurement.CODE_PZA);
        const stock = new Stock(5, measurement);

        expect(stock.verifyGreaterStock(6)).toBeFalsy();
    });
    test("verifyDecrementStockNotPossible", () => {
        const measurement = new Measurement(Measurement.CODE_PZA);
        const stock = new Stock(15, measurement);

        expect(() => stock.decrementValue(20)).toThrow(Stock.INVALID_VALUE);
    });
});
