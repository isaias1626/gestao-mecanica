import axios from 'axios';
const baseUrlApi = "http://192.141.80.64:8080";


export interface User {
    email: string,
    password: string,
} 

export const userLoginService = {
    async ValidateLogin(user: User) {
        const URL = `${baseUrlApi}/api/User/login`;
        const { data } = await axios.post(URL, user);
        return data
    },

    Logout: () => {
        localStorage.removeItem('userToken');
    },

    VerifyAuth: () => {
        return !!localStorage.getItem('userToken');
    }
};
