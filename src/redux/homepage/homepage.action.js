import HomePageActionTypes from './homepage.types';

export const fetchSectionDataStart = () => ({
    type:HomePageActionTypes.FETCH_SECTION_DATA_START
})

export const fetchSectionDataSuccess = (data) => ({
    type:HomePageActionTypes.FETCH_SECTION_DATA_SUCCESS,
    payload:data
})

export const fetchSectionDataFailure = (error) => ({
    type:HomePageActionTypes.FETCH_SECTION_DATA_Failure,
    payload:error
})

export const toggleIsLoadingTrue = () => ({
    type:HomePageActionTypes.TOGGLE_IS_LOADING_TRUE
})

export const toggleIsLoadingFalse = () => ({
    type:HomePageActionTypes.TOGGLE_IS_LOADING_FALSE
})

export const fetchCountriesStart = () => ({
    type:HomePageActionTypes.FETCH_COUNTRIES_START
})

export const fetchCountriesSuccess = (countries) =>({
    type:HomePageActionTypes.FETCH_COUNTRIES_SUCCESS,
    payload:countries
})

export const fetchCountriesFailure = (error) => ({
    type:HomePageActionTypes.FETCH_COUNTRIES_FAILURE,
    payload:error
})

export const setRegion = (region) => ({
    type:HomePageActionTypes.SET_REGiON,
    payload:region
})