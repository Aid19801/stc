// Video API
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// Banner API
const BANNER_REQUEST = "BANNER_REQUEST";
const BANNER_SUCCESS = "BANNER_SUCCESS";
const BANNER_FAILURE = "BANNER_FAILURE";


const initialState = {
    fetching: false,
    videos: [],
    bannerInformation: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
            break;
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, videos: action.response };
            break;
        case API_CALL_FAILURE:
            return { ...state, fetching: false, videos: [], error: action.error };
            break;

        case BANNER_REQUEST:
            return { ...state, fetching: true };
            break;
        case BANNER_SUCCESS:
            return { ...state, fetching: false, bannerInformation: action.response};
            break;
        case BANNER_FAILURE:
            return { ...state, fetching: false, error: action.error};
            break;

        default:
            return state;
    }
}

export default reducer;