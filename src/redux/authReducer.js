import SET_AUTH_DATA from './constantsStore';
import UNSET_AUTH_DATA from './constantsStore';
const INITIAL_STATE = {
    isAuth: false,
    userData: null,
    configData: {
        max_file_upload: null,
    },
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, userData: action.payload, isAuth: true };
        case UNSET_AUTH_DATA:
            return { INITIAL_STATE };
        default:
            return state;
    }
};

export default authReducer;
