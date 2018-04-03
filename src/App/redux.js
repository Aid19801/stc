// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
    fetching: false,
    videos: [],
    error: null
};

export function reducer(state = initialState, action) {
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

        default:
            return state;
    }
}