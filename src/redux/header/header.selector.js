import {createSelector} from 'reselect';

const selectHeader = state => state.header;

export const selectCarInfo = createSelector(
    [selectHeader],
    header => header.carInfo ? header.carInfo : []
)