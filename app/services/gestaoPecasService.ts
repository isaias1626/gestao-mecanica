import axios from "axios";
import { Peca } from "../dashboard/gestao-de-pecas/page";

const baseUrlApi = "http://192.141.80.64:8080";

export const gestaoPecasService = {
    async getPecas() {
        const URL = `${baseUrlApi}/api/Parts`
        const { data } = await axios.get(URL);
        return data
    },
    async createPeca(data: Peca) {
        const URL = `${baseUrlApi}/api/Parts`
        return await axios.post(URL, data);
    },
    async getPecasById(id: string) {
        const URL = `${baseUrlApi}/api/Parts/${id}`
        const { data } = await axios.get(URL);
        return data
    },
    async deletePecas(id: string) {
        const URL = `${baseUrlApi}/api/Parts/${id}`
        return await axios.delete(URL);
    },
    async updatePeca(data: Peca) {
        const URL = `${baseUrlApi}/api/Parts/${data.id}`
        return await axios.patch(URL, data);
    },
};
