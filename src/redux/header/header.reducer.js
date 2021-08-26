import HeaderActionTypes from './header.types';

const INITIAL_STATE= {
    carInfo:null,
    error:null
}

const headerReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case HeaderActionTypes.FETCH_CAR_INFO_SUCCESS:
            return {
                ...state,
                carInfo:action.payload,
                error:null
            }
        
        case HeaderActionTypes.FETCH_CAR_INFO_FAILURE:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default headerReducer;