const TEST_BANNER = 'TEST_BANNER';

const initialState = {
    fetching: false,
    bannerInformation: {},
    error: null
};

function bannersReducer(state = initialState, action) {
    switch(action.type) {
        case TEST_BANNER:
            return { ...state, fetching: true, bannerInformation: { foo: 'bar' }, };
            break;

        default:
            return state;
    }
}

export default bannersReducer;