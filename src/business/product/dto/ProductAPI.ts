import { CoinAPI } from "../../coin/dto/CoinAPI";

export interface ProductAPI {
    code: string;
    description: string;
    priceSale: number;
    imageBase64: string;
    coin: CoinAPI;
  };