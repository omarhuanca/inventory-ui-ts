import { Coin } from "../../../src/business/coin/model/Coin";
import { Price } from "../../../src/business/price/model/Price"

describe("Price suit validation", () => {
    test("verifyCompareValueSuccess", () => {
        const coin = new Coin(Coin.COIN_USD);
        const price = new Price(15.2, coin);

        expect(price.compareOtherValue(14)).toBeFalsy();
    });
    test("verifyCompareValueFailure", () => {
        const coin = new Coin(Coin.COIN_USD);
        const price = new Price(15.9, coin);

        expect(price.compareOtherValue(15.9)).toBeTruthy();
    });
    test("verifyValueNegativeFalse", () => {
        const coin = new Coin(Coin.COIN_USD);
        const price = new Price(15.9, coin);

        expect(price.isNegativeValue()).toBeFalsy();
    });
    test("verifyValueNegativeTrue", () => {
        const coin = new Coin(Coin.COIN_USD);
        const price = new Price(-25, coin);

        expect(price.isNegativeValue()).toBeTruthy();
    });
    test("verifyCompareCodeFailure", () => {
        const coin = new Coin(Coin.COIN_USD);
        const price = new Price(15.9, coin);

        expect(price.compareOtherCode(Coin.COIN_BS)).toBeFalsy();
    });
    test("verifyCompareCodeSuccess", () => {
        const coin = new Coin(Coin.COIN_USD);
        const price = new Price(15.9, coin);

        expect(price.compareOtherCode(Coin.COIN_USD)).toBeTruthy();
    });
});