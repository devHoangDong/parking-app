import axiosClient from "./axiosClient";
const PREFIX_URL = "rssp/ssa/request/sign";

const approveApi = {
    getApprove: (data) => {
        const url = `${PREFIX_URL}/approve-signing`;
        return axiosClient.post(url, data);
    },
}
export default approveApi;
