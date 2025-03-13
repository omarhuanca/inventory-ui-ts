import { Coin } from "../../../src/business/coin/model/Coin";
import { Price } from "../../../src/business/price/model/Price"

describe("Price suit validation", () => {
    test("verifyCompareValueSuccess", () => {
        let coin = new Coin(Coin.COIN_USD);
        let price = new Price(15.2, coin);

        expect(price.compareOtherValue(14)).toBeFalsy();
    });
    test("verifyCompareValueFailure", () => {
        let coin = new Coin(Coin.COIN_USD);
        let price = new Price(15.9, coin);

        expect(price.compareOtherValue(15.9)).toBeTruthy();
    });
    test("verifyValueNegativeFalse", () => {
        let coin = new Coin(Coin.COIN_USD);
        let price = new Price(15.9, coin);

        expect(price.isNegativeValue()).toBeFalsy();
    });
    test("verifyValueNegativeTrue", () => {
        let coin = new Coin(Coin.COIN_USD);
        let price = new Price(-25, coin);

        expect(price.isNegativeValue()).toBeTruthy();
    });
    test("verifyCompareCodeFailure", () => {
        let coin = new Coin(Coin.COIN_USD);
        let price = new Price(15.9, coin);

        expect(price.compareOtherCode(Coin.COIN_BS)).toBeFalsy();
    });
    test("verifyCompareCodeSuccess", () => {
        let coin = new Coin(Coin.COIN_USD);
        let price = new Price(15.9, coin);

        expect(price.compareOtherCode(Coin.COIN_USD)).toBeTruthy();
    });
});