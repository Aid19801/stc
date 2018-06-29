import { put, call, takeLatest, all } from 'redux-saga/effects'
import { watcherVidSaga } from './App/Vid-Section/sagas';
import data from './Data/db.json';

let jsonServerIsOnline = false;

function* watcherBannerSaga() {
    yield takeLatest('BANNER_REQUEST', workerBannerSaga)
}

function jsonServerData() {
    return fetch(`http://localhost:3004/banners/`, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        method: 'GET',
        mode: 'cors',
    }).then((res) => res.json()).then(myJson => myJson);
}


function mockBannerInformation() {
    return jsonServerIsOnline ? jsonServerData() : data.banners;
}

function* workerBannerSaga() {
    try {
        let objectWithBannerInfoToRender = {};
        const response = yield call(mockBannerInformation);
        objectWithBannerInfoToRender = response[0];
        yield put({ type: "BANNER_SUCCESS", response: objectWithBannerInfoToRender });

    } catch (error) {
        yield put({ type: "BANNER_FAILURE", error });
    }
}

export default function* rootSaga() {
    yield all([
        watcherBannerSaga(),
        watcherVidSaga()
    ])
}