import { takeLatest, call, put } from 'redux-saga/effects'; 
import data from '../../Data/db.json';

// 1 environment util so dev can continue without json-server
let jsonServerIsOnline = false;

// 2 watcher saga listens for API call, fires off worker saga.
export function* watcherVidSaga() {
    yield takeLatest('API_CALL_REQUEST', workerVidSaga);
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
function mockVidsInformation() {
    return jsonServerIsOnline ? jsonServerData() : data.videos;
}

const randomisePanes = arr => {
    if (arr.length <= 3) {
        return arr;
    }
    return arr
        .map(each => ({ sort: Math.random(), value: each }))
        .sort((a, b) => a.sort - b.sort)
        .map(each => each.value);
}

// 3 worker saga gets data based on whether jsonServer is active
// or not, by firing off mockVids()
// 6 randomised response is passed through to reducer/store. 
function* workerVidSaga() {
    try {
        let response = yield call(mockVidsInformation);
        yield put({ type: "API_CALL_SUCCESS", response: randomisePanes(response) });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}
