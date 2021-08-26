import {createSelector} from 'reselect';

const selectHomePage = state => state.homePage;

export const selectHomePageSectionsData = createSelector(
    [selectHomePage],
    homePage => homePage.sectionsData
)

export const selectHomePageSectionsDataForPreview = createSelector(
    [selectHomePageSectionsData],
    sectionsData => sectionsData ? Object.keys(sectionsData).map(key => sectionsData[key]) : [] 
)

export const selectIsLoading = createSelector(
    [selectHomePage],
    homePage => homePage.isLoading
)

export const selectRegion = createSelector(
    [selectHomePage],
    homePage => homePage.region
)

export const selectCountries = createSelector(
    [selectHomePage],
    homePage => homePage.countries ? homePage.countries : []
)