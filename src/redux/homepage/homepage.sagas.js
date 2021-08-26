import {all,call,takeLatest,put} from 'redux-saga/effects';
import HomePageActionTypes from './homepage.types';
import {fetchCountriesFailure, fetchCountriesSuccess, fetchSectionDataFailure, fetchSectionDataSuccess, toggleIsLoadingFalse} from './homepage.action';
import sectionsData from './section-data';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export function* fetchSectionData() {
    try{
        yield put(fetchSectionDataSuccess(sectionsData));
    }
    catch(error) {
        yield put(fetchSectionDataFailure(error));
    }

}

export function* onFetchSectionDataStart() {
    yield takeLatest(HomePageActionTypes.FETCH_SECTION_DATA_START,fetchSectionData);
}

export function* fetchCountries() {
    
    try {

        const response = yield fetch('https://restcountries.eu/rest/v2/all');
        const countries = yield response.json();

        yield put(fetchCountriesSuccess(countries));
        yield sleep(2000);
        yield put(toggleIsLoadingFalse())
    }
    catch(error) {
        yield put(fetchCountriesFailure(error));
    }


}

export function* onFetchCountriesStart() {
    yield takeLatest(HomePageActionTypes.FETCH_COUNTRIES_START,fetchCountries)
}

export function* HomePageSaga() {
    yield all(
        [
            call(onFetchSectionDataStart),
            call(onFetchCountriesStart)
        ]
    )
}