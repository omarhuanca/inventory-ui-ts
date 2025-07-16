import { CoinAPI } from "../../coin/dto/CoinAPI";
import { MeasurementAPI } from "../../measurement/dto/MeasurementAPI";

export interface ProductAPI {
    code: string;
    description: string;
    measurement: MeasurementAPI;
    priceSale: number;
    imageBase64: string;
    coin: CoinAPI;
  };