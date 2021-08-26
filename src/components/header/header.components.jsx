import React, {useEffect} from 'react'
import { fetchCarInfoStart } from '../../redux/header/header.actions';

import {connect} from 'react-redux';

import {
    HeaderWrapper,
    Logo,
    NavMenu,
    NavList,
    NavItem,
    RightMenu,
    SideBarLabel,
    SideBarToggle,
    BurgerNav,
    SideBarBackground
} from './header.styles';
import { createStructuredSelector } from 'reselect';
import { selectCarInfo } from '../../redux/header/header.selector';

function Header({fetchCarInfoStart,carInfo}) {
    useEffect(() => {
        fetchCarInfoStart()
    }, [fetchCarInfoStart])

    return (
        <HeaderWrapper>
        
            <Logo to='/'>
                <img src='./assets/images/logo.svg' alt='tesla-logo' />
            </Logo>

            <NavMenu>

                <NavList>
                    {
                        carInfo.map(car => (
                            <NavItem key={car.id}>
                                {car.title}
                            </NavItem>
                        ))
                    }
                </NavList>

            </NavMenu>

            <RightMenu>

                <NavList>
                    <NavItem right>
                        Shop
                    </NavItem>
                    <NavItem right>
                        Tesla Account
                    </NavItem>
                </NavList>

            </RightMenu>
            
            <SideBarToggle type='checkbox' id='checkbox-input'/>
                <SideBarLabel htmlFor='checkbox-input' >
                    <span></span>
                </SideBarLabel>
                
                <SideBarBackground />

                <BurgerNav>

                <NavList sidebar>

                    {
                        carInfo.map(car => (
                            <NavItem key={car.id} sidebar>
                                {car.title}
                            </NavItem>
                        ))
                    }

                    <NavItem sidebar>
                        Existing Inventory
                    </NavItem>

                    <NavItem sidebar>
                        Used Inventory
                    </NavItem>

                    <NavItem sidebar>
                        Trade-in
                    </NavItem>

                    <NavItem sidebar>
                        Cybertruck
                    </NavItem>

                    <NavItem sidebar>
                        Roadaster
                    </NavItem>

                    <NavItem sidebar>
                        Semi
                    </NavItem>

                </NavList>

                </BurgerNav>
        </HeaderWrapper>
    )
}


const mapDispatchToProps= dispatch => ({
    fetchCarInfoStart: () => dispatch(fetchCarInfoStart()),
})

const mapStateToProps = createStructuredSelector({
    carInfo: selectCarInfo
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
