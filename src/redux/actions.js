import SET_AUTH_DATA from './constantsStore';
import UNSET_AUTH_DATA from './constantsStore';

export const setAuthData = payload => {
    return {
        type: SET_AUTH_DATA,
        payload,
    };
};
export const unsetAuthData = () => {
    return {
        type: UNSET_AUTH_DATA,
    };
};
