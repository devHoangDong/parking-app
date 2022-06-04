import axiosClient from "./axiosClient";
import axiosClientNotLogin from './axiosClientNotLogin';
const PREFIX_URL = "/rssp/sic/customer";

const signingApi = {
    getListSigning: (params) => {
        const url = `${PREFIX_URL}/get-list-signing`;
        return axiosClient.post(url, { params });
    },
    getSignature: (data) => {
        const url = `${PREFIX_URL}/get-signature`;
        return axiosClient.post(url, data);
    },
    getListRequestSigning: (data) => {
        const url = `${PREFIX_URL}/get-list-request-signing`;
        return axiosClient.post(url, data);
    },
    checkCertificate: (data) => {
        const url = `${PREFIX_URL}/check-certificate`;
        return axiosClient.post(url, data);
    },
    active: (data) => {
        const url = `${PREFIX_URL}/active`;
        return axiosClient.post(url, data);
    },

}
export default signingApi;
