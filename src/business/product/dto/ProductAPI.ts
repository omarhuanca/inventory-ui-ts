import { CoinAPI } from "../../coin/dto/CoinAPI";
import { LineAPI } from "../../line/dto/LineAPI";
import { MeasurementAPI } from "../../measurement/dto/MeasurementAPI";
import { ProviderAPI } from "../../provider/dto/ProviderAPI";

export interface ProductAPI {
    code: string;
    description: string;
    stock: number;
    measurement: MeasurementAPI;
    priceCost: number;
    priceSale: number;
    coin: CoinAPI;
    line: LineAPI;
    provider: ProviderAPI;
  };