import { AxiosError } from "../../../../node_modules/axios/index";
import { LineAPI } from "../dto/LineAPI";
import { lineClient } from "./lineClient";

export const getLines = async (): Promise<LineAPI[]> => {
    try {
        const { data } = await lineClient.get('?_limit=6')

        return data
    } catch(error) {
        const err = error as AxiosError;
        console.log(err.message);
        console.log(err.name)

        return []
    }
}
