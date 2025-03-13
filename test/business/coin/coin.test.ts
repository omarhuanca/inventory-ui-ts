import {Coin} from "../../../src/business/coin/model/Coin";

describe("Coin suit validation", () => {
    test("verifyCompareCodeSuccess", () => {

        let coin = new Coin(Coin.COIN_USD);

        expect(coin.compareOtherCode("usd")).toBeTruthy();
    });
    test("verifyCompareCodeFailure", () => {

        let coin = new Coin(Coin.COIN_USD);

        expect(coin.compareOtherCode("dsu")).toBeFalsy();
    });
});