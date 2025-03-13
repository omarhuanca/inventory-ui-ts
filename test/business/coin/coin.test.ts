import {Coin} from "../../../src/business/coin/model/Coin";

describe("Coin suit validation", () => {
    test("verifyCompareCodeSuccess", () => {

        const coin = new Coin(Coin.COIN_USD);

        expect(coin.compareOtherCode("usd")).toBeTruthy();
    });
    test("verifyCompareCodeFailure", () => {

        const coin = new Coin(Coin.COIN_USD);

        expect(coin.compareOtherCode("dsu")).toBeFalsy();
    });
});