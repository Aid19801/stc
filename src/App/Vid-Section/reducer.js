// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
    fetching: false,
    videos: [],
    error: null
};

function videosReducer(state = initialState, action) {
    console.log('AT | action ', action);
    switch (action.type) {
        case API_CALL_REQUEST:
        console.log('000');
            return { ...state, fetching: true, error: null };
            break;
        case API_CALL_SUCCESS:
        console.log('1111');
            return { ...state, fetching: false, videos: action.response };
            break;
        case API_CALL_FAILURE:
        console.log('2222');
            return { ...state, fetching: false, videos: [], error: action.error };
            break;

        default:
            return state;
    }
}

export default videosReducer;