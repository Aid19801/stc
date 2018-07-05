import { takeLatest, call, put, take } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import * as sagas from '../sagas';
import * as constants from '../constants';

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
        });

        next('it should yield the action for API call success...', (result) => {
            const response = [
                {
                    title: "The Test Things",
                    tagline: "Binky Martinez takes is a funny guy...",
                    imageOne: "http://i1262.photobucket.com/albums/ii619/ade19801/Screenshot%202018-06-29%2009.35.51_zpsjbefduoz.png",
                    imageTwo: "http://i1262.photobucket.com/albums/ii619/ade19801/Screenshot%202018-06-29%2010.08.31_zpsnaiveed5.png"
                },
                {
                    title: "Test Stuff and Others",
                    tagline: "Binky Martinez takes is a funny guy...",
                    imageOne: "http://i1262.photobucket.com/albums/ii619/ade19801/Screenshot%202018-06-29%2009.35.51_zpsjbefduoz.png",
                    imageTwo: "http://i1262.photobucket.com/albums/ii619/ade19801/Screenshot%202018-06-29%2010.08.31_zpsnaiveed5.png"
                },
                {
                    title: "Cabinet Test Test Doors",
                    tagline: "Binky McTest takes is a funny guy...",
                    imageOne: "http://i1262.photobucket.com/albums/ii619/ade19801/Screenshot%202018-06-29%2009.35.51_zpsjbefduoz.png",
                    imageTwo: "http://i1262.photobucket.com/albums/ii619/ade19801/Screenshot%202018-06-29%2010.08.31_zpsnaiveed5.png"
                },
                {
                    title: "Duvet Test Pillows III",
                    tagline: "Michael Jackson loved to dance",
                    imageOne: "http://i1262.photobucket.com/albums/ii619/ade19801/Screenshot%202018-06-29%2009.35.51_zpsjbefduoz.png",
                    imageTwo: "http://i1262.photobucket.com/albums/ii619/ade19801/Screenshot%202018-06-29%2010.08.31_zpsnaiveed5.png"
                },
            ];
            expect(result).toEqual(put({ type: "API_CALL_SUCCESS", response: sagas.randomisePanes(response) }));
        });
    })

})

