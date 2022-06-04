import axiosClient from "./axiosClient";
const PREFIX_URL = "/rssp/sic/customer";

const activeApi = {
    active: (data) => {
        const url = `${PREFIX_URL}/acticve`;
        return axiosClient.post(url, data);
    },
}
export default activeApi;
