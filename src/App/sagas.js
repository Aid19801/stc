import { takeLatest, call, put } from 'redux-saga/effects'; 
import data from '../Data/db.json';

// 1 environment util so dev can continue without json-server
let jsonServerIsOnline = false;

// 2 watcher saga listens for API call, fires off worker saga.
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// 5 standard fetch for a mock json server
function jsonServerData() {
    return fetch(`http://localhost:3004/videos/`, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        method: 'GET',
        mode: 'cors',
    }).then((res) => res.json()).then(myJson => myJson);
}

// 4 mockVids() checks if JsonServer is online,
// if it is, we fetch json, if not, return db.json mocks.
function mockVids() {
    return jsonServerIsOnline ? jsonServerData() : data.videos;
}
// 3 worker saga gets data based on whether jsonServer is active
// or not, by firing off mockVids()
function* workerSaga() {
    try {
        const response = yield call(mockVids);
        yield put({ type: "API_CALL_SUCCESS", response });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}
