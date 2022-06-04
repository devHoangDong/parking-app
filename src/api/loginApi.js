import axiosClient from "./axiosClient";
import axiosClientNotLogin from './axiosClientNotLogin';
const PREFIX_URL = "/rssp/sic/customer";

const loginApi = {
    login: (data) => {
        const url = `${PREFIX_URL}/login`;
        return axiosClientNotLogin.post(url, data);
    },
}
export default loginApi;
