import { takeLatest, call, put } from 'redux-saga/effects'; 
import data from '../../Data/db.json';


let jsonServerIsOnline = false;

export function* watcherVidSaga() {
    yield takeLatest('API_CALL_REQUEST', workerVidSaga);
}

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

export function mockVidsInformation() {
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

export function* workerVidSaga() {
    try {
        let response = yield call(mockVidsInformation);
        yield put({ type: "API_CALL_SUCCESS", response: randomisePanes(response) });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}
