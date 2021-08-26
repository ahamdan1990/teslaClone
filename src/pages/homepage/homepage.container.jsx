import {connect} from 'react-redux';
import {compose} from 'redux';

import {createStructuredSelector} from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCountriesStart, fetchSectionDataStart, setRegion, toggleIsLoadingFalse, toggleIsLoadingTrue } from '../../redux/homepage/homepage.action';
import { selectCountries, selectHomePageSectionsDataForPreview , selectIsLoading, selectRegion } from '../../redux/homepage/homepage.selector';
import Homepage from './homepage.components';


const mapStateToProps = createStructuredSelector({
    sectionsData: selectHomePageSectionsDataForPreview,
    isLoading : selectIsLoading,
    region: selectRegion,
    countries:selectCountries
})

const mapDispatchToProps = dispatch => ({
    fetchSectionDataStart : () => dispatch(fetchSectionDataStart()),
    fetchCountriesStart : () => dispatch(fetchCountriesStart()),
    setRegion: region => dispatch(setRegion(region)),
    toggleLoadingTrue: () => dispatch(toggleIsLoadingTrue()),
    toggleLoadingFalse: () => dispatch(toggleIsLoadingFalse())
})

const HomePageContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    WithSpinner
)(Homepage)

export default HomePageContainer;