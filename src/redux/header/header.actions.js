import HeaderActionTypes from './header.types';

export const fetchCarInfoStart = () => ({
    type:HeaderActionTypes.FETCH_CAR_INFO_START
})

export const fetchCarInfoSuccess = (carInfo) => ({
    type:HeaderActionTypes.FETCH_CAR_INFO_SUCCESS,
    payload:carInfo
})

export const fetchCarInfoFailure = (error) => ({
    type:HeaderActionTypes.FETCH_CAR_INFO_FAILURE,
    payload:error
})