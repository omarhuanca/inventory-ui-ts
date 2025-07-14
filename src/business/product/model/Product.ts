import { Provider } from "../../provider/model/Provider";
import { Line } from "../../line/model/Line";
import { Measurement } from "../../measurement/model/Measurement";
import { Coin } from "../../coin/model/Coin";

export class Product {
    static CODE_PLATE = "PLA-1";
    static DESCRIPTION = "plato bowl8 porcelana isaylin";

    private code: string;
    private description: string;
    private stock: number;
    private measurement: Measurement;
    private priceCost: number;
    private priceSale: number;
    private coin: Coin;
    private imageBase64: string;
    private line: Line;
    private provider: Provider;

    constructor(code: string, description: string, stock: number, measurement: Measurement, priceCost: number, priceSale: number, coin: Coin, imageBase64: string, line: Line, provider: Provider){
        this.code = code;
        this.description = description;
        this.stock = stock;
        this.measurement = measurement;
        this.priceCost = priceCost;
        this.priceSale = priceSale;
        this.coin = coin;
        this.imageBase64 = imageBase64;
        this.line = line;
        this.provider = provider;
    }

    getCode(): string {
        return this.code;
    }

    getDescription(): string {
        return this.description;
    }

    getStock(): number {
        return this.stock;
    }

    getMeasurement(): Measurement {
        return this.measurement;
    }

    getPriceCost(): number {
        return this.priceCost;
    }

    getPriceSale(): number {
        return this.priceSale;
    }

    getCoin(): Coin {
        return this.coin;
    }

    getImageBase64(): string {
        return this.imageBase64;
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
