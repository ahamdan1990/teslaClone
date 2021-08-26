import HomePageActionTypes from './homepage.types';

const INITIAL_STATE={
    sectionsData:null,
    error:null,
    isLoading:null,
    countries:null,
    region:null,
}

const HomePageReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case HomePageActionTypes.FETCH_SECTION_DATA_SUCCESS:
            return {
                ...state,
                sectionsData:action.payload,
                error:null,

            }
        
        case HomePageActionTypes.TOGGLE_IS_LOADING_TRUE:
            return {
                ...state,
                isLoading:true,
            }

        case HomePageActionTypes.TOGGLE_IS_LOADING_FALSE:
            return {
                ...state,
                isLoading:false,
            }
        
        case HomePageActionTypes.FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                error:null,
                countries:action.payload,
            }

        case HomePageActionTypes.SET_REGiON: 
            return {
                ...state,
                region:action.payload
            }

        case HomePageActionTypes.FETCH_SECTION_DATA_FAILURE:
        case HomePageActionTypes.FETCH_COUNTRIES_FAILURE:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default HomePageReducer;