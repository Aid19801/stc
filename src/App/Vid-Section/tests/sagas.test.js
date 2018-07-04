import { takeLatest, call, put, take } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import * as sagas from '../sagas';
import * as constants from '../constants';

// jest.mock(sagas, () => ({
//     mockVidsInformation: jest.fn(),
// }))

describe('Vid Section Sagas', () => {

    describe('watcher vid saga...', () => {
        const next = sagaHelper(sagas.watcherVidSaga());

        next('it should yield workerVidSaga when the Watcher is actioned', (result) => {
            expect(result).toEqual(takeLatest('API_CALL_REQUEST', sagas.workerVidSaga));
        });
        next('it should return nothing', (result) => {
            expect(result).toBeUndefined();
        })
    });

    describe('worker vid saga...', () => {
        const next = sagaHelper(sagas.workerVidSaga());

        next('it should yield a call with arg mockVidsInformation', (result) => {
            expect(result).toEqual(call(sagas.mockVidsInformation));
        })
    })

})

