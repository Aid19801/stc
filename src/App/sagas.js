import { takeLatest, call, put } from 'redux-saga/effects'; 

import offlineData from '../Data/data.json';

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchVidsOnline() {
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

// function fetchVidsOffline() {
//     return offlineData;
// }


function* workerSaga() {
    try {
        const response = yield call(fetchVidsOnline);
        console.log('response: ', response);
        yield put({ type: "API_CALL_SUCCESS", response });
        
        // const offlineResponse = response.videos;
        // yield put({ type: "API_CALL_SUCCESS", offlineResponse });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}
