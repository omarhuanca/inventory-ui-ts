import { AxiosError } from "../../../../node_modules/axios/index"
import { client } from "./lineClient";
import { LineAPI } from "./LineAPI";

export const getLines = async (): Promise<LineAPI[]> => {
    try {
        const { data } = await client.get()

        return data
    } catch(error) {
        const err = error as AxiosError;
        console.log(err.message);
        console.log(err.name)

        return []
    }
}
