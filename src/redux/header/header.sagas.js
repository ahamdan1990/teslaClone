import {all,call,put,takeLatest} from 'redux-saga/effects';
import { fetchCarInfoFailure, fetchCarInfoSuccess } from './header.actions';
import HeaderActionTypes from './header.types';

export function* fetchCarInfo() {
    try {
        const carInfo = require('./carInfo.json');
        yield put(fetchCarInfoSuccess(carInfo));
    }
    catch(error) {
        yield put(fetchCarInfoFailure(error));
    }
}

export function* onFetchCarInfoStart() {
    yield takeLatest(HeaderActionTypes.FETCH_CAR_INFO_START,fetchCarInfo)
}

export function* headerSaga() {
    yield all(
        [
            call(onFetchCarInfoStart)
        ]
    )
}