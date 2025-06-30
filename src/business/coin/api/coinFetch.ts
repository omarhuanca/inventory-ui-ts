import { AxiosError } from "../../../../node_modules/axios/index";
import { CoinAPI } from "../dto/CoinAPI";
import { coinClient } from "./coinClient";

export const getLines = async (): Promise<CoinAPI[]> => {
    try {
        const { data } = await coinClient.get('?limit=6')

        return data
    } catch(error) {
        const err = error as AxiosError;
        console.log(err.message);
        console.log(err.name)

        return []
    }
}