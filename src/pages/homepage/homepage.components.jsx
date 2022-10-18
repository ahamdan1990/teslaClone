import React  from 'react'

import Section from '../../components/section/section.components';

import {
    HomePageWrapper,
    PopupRegionWrapper,
    PopupContent
} from './homepage.styles';

class Homepage extends React.Component {
    componentDidMount() {
        const {fetchSectionDataStart,fetchCountriesStart,toggleLoadingTrue,isLoading} = this.props;
        
        if(isLoading === null) {

            
            fetchSectionDataStart();
            fetchCountriesStart();
        }
       
    }

    handleOnClickSetRegion = (e) => {
        const {setRegion} = this.props;
        setRegion(e.target.textContent);
    }
    render() {
        const {sectionsData,region,countries} =this.props;
        const{handleOnClickSetRegion} = this;

        return (
            <HomePageWrapper>
                {
                    !region 
                        &&
                    <PopupRegionWrapper>
                        <PopupContent>
                            <h1>Select Region</h1>
                            {
                                countries && countries.map(country => (
                                    <li key={country.alpha2Code} onClick={handleOnClickSetRegion}><span>{country.name}</span></li>
                                ))
                            }
                        </PopupContent>
                    </PopupRegionWrapper> 
                }
                {
                    sectionsData.map(({id,...props}) => (
                        <Section key={id} {...props} />
                    ))
                }
            </HomePageWrapper>
        )
    }

}

export default Homepage
