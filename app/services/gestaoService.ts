import axios from "axios";
import { Servicos } from "../dashboard/gestao-de-servicos/page";

const baseUrlApi = "http://192.141.80.64:8080";

export const gestaoService = {
    async getServicos() {
        const URL = `${baseUrlApi}/api/Service`
        const { data } = await axios.get(URL);
        return data
    },
    async createServicos(data:Servicos) {
        const URL = `${baseUrlApi}/api/Service`
        return await axios.post(URL, data);
    },
    async getServicosById(id: string) {
        const URL = `${baseUrlApi}/api/Service/${id}`
        const { data } = await axios.get(URL);
        return data
    },
    async deleteServicos(id: string) {
        const URL = `${baseUrlApi}/api/Service/${id}`
        return await axios.delete(URL);
    },
    async updateServicos(data: Servicos) {
        const URL = `${baseUrlApi}/api/Service/${data.id}`
        return await axios.patch(URL, data);
    },
};
