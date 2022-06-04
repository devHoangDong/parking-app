import axiosClient from "./axiosClient";
import axiosClientNotLogin from './axiosClientNotLogin';
const PREFIX_URL = "/rssp/sic/customer";

const userApi = {
    getInfoUser: (data) => {
        const url = `${PREFIX_URL}/get-info-user`;
        return axiosClient.post(url, data);
    },
}
export default userApi;
