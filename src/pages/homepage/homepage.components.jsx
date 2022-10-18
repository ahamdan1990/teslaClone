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
            console.log(fetchCountriesStart());
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
                    sectionsData.map(({id,...props}) => (
                        <Section key={id} {...props} />
                    ))
                }
            </HomePageWrapper>
        )
    }

}

export default Homepage
