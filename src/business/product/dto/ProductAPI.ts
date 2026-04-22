import { CoinAPI } from "../../coin/dto/CoinAPI";
import { MeasurementAPI } from "../../measurement/dto/MeasurementAPI";
import {LineAPI} from "../../line/dto/LineAPI.ts";

export interface ProductAPI {
    code: string;
    description: string;
    measurement: MeasurementAPI;
    priceSale: number;
    imageBase64: string;
    coin: CoinAPI;
    line: LineAPI;
  };