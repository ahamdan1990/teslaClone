import {call,all} from 'redux-saga/effects';
import { headerSaga } from './header/header.sagas';
import { HomePageSaga } from './homepage/homepage.sagas';

export default function* rootSaga() {
    yield all(
        [
            call(HomePageSaga),
            call(headerSaga)
        ]
    )
}