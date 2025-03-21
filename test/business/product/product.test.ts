import {Coin} from "../../../src/business/coin/model/Coin";
import {Price} from "../../../src/business/price/model/Price"
import {Measurement} from "../../../src/business/measurement/model/Measurement"
import {Stock} from "../../../src/business/stock/model/Stock"
import {Provider} from "../../../src/business/provider/model/Provider"
import {Line} from "../../../src/business/line/model/Line"
import {Product} from "../../../src/business/product/model/Product"

describe("Product suit validation", () => {
    test("verifyCompareCodeSuccess", () => {
        const coin = new Coin(Coin.COIN_USD);
        const priceCost = new Price(8, coin);
        const priceSale = new Price(10, coin);

        const measurement = new Measurement(Measurement.CODE_PZA);
        const stock = new Stock(5, measurement);

        const provider = new Provider(Provider.JUAN_PEREZ, Provider.JUAN_PEREZ_CELLPHONE);

        const line = new Line(Line.LINE_PLATE);

        const product = new Product(Product.CODE_PLATE, Product.DESCRIPTION, stock, priceCost, priceSale, line, provider);

        expect(product.compareOtherCode(Product.CODE_PLATE)).toBeTruthy();
    });
    test("verifyCompareCodeWithSpace", () => {
        const coin = new Coin(Coin.COIN_USD);
        const priceCost = new Price(8, coin);
        const priceSale = new Price(10, coin);

        const measurement = new Measurement(Measurement.CODE_PZA);
        const stock = new Stock(5, measurement);

        const provider = new Provider(Provider.JUAN_PEREZ, Provider.JUAN_PEREZ_CELLPHONE);

        const line = new Line(Line.LINE_PLATE);

        const product = new Product(Product.CODE_PLATE, Product.DESCRIPTION, stock, priceCost, priceSale, line, provider);

        expect(product.compareOtherCode("    PLA-1    ")).toBeTruthy();
    });
    test("verifyCompareCodeLowercase", () => {
        const coin = new Coin(Coin.COIN_USD);
        const priceCost = new Price(8, coin);
        const priceSale = new Price(10, coin);

        const measurement = new Measurement(Measurement.CODE_PZA);
        const stock = new Stock(5, measurement);

        const provider = new Provider(Provider.JUAN_PEREZ, Provider.JUAN_PEREZ_CELLPHONE);

        const line = new Line(Line.LINE_PLATE);

        const product = new Product(Product.CODE_PLATE, Product.DESCRIPTION, stock, priceCost, priceSale, line, provider);

        expect(product.compareOtherCode("pla-1    ")).toBeTruthy();
    });
});
