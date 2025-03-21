import { Provider } from "../../provider/model/Provider";
import { Line } from "../../line/model/Line";
import { Price } from "../../price/model/Price";
import { Stock } from "../../stock/model/Stock";

export class Product {
    static CODE_PLATE = "PLA-1";
    static DESCRIPTION = "plato bowl8 porcelana isaylin";

    private code: string;
    private description: string;
    private stock: Stock;
    private priceCost: Price;
    private priceSale: Price;
    private line: Line;
    private provider: Provider;

    constructor(code: string, description: string, stock: Stock, priceCost: Price, priceSale: Price, line: Line, provider: Provider){
        this.code = code;
        this.description = description;
        this.stock = stock;
        this.priceCost = priceCost;
        this.priceSale = priceSale;
        this.line = line;
        this.provider = provider;
    }

    getCode(): string {
        return this.code;
    }

    getDescription(): string {
        return this.description;
    }

    getStock(): Stock {
        return this.stock;
    }

    getPriceCost(): Price {
        return this.priceCost;
    }

    getPriceSale(): Price {
        return this.priceSale;
    }

    getLine(): Line {
        return this.line;
    }

    getProvider(): Provider {
        return this.provider;
    }

    compareOtherCode(potentialCode: string): boolean {
        return this.code.trim().toLowerCase() == potentialCode.trim().toLowerCase();
    }
}
