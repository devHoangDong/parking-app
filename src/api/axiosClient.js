// import store from 'app/store';
import axios from 'axios';
import queryString from 'query-string';
// import Swal from 'sweetalert2';
// import store from 'app/store';
// import { logout } from '../redux/actions/auth/loginActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosClient = axios.create({
    baseURL: 'http://10.30.1.79:9901',
    timeout: 40000,
    headers: {
        'content-type': 'application/json',
        "X-Requested-With": "XMLHttpRequest",
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('@storage_Token');
    // token.replaceAll('"', '');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {

        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    const response = error.response.data;
    // console.log('response: ', response);
    // if (response && response.status_code === 401) {
    // Swal.fire({
    //     title: "Error",
    //     text: response.error.message,
    //     icon: "error",
    //     dangerMode: false
    // });
    //     return
    // }
    // Swal.fire({
    //     title: "Error",
    //     text: error.message,
    //     icon: "error",
    //     dangerMode: false
    // });
    // throw error;
});
export default axiosClient;
