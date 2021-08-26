import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const righNavItem = css ` 
    margin-right:1rem;

    @media only screen and (max-width:768px) {
        flex:1;
        align-self:center;
        margin-right:0;
        margin-left:2rem;
    }
`

const NavItemMenu = css ` 
    padding: 0 1rem;
`

const sideBarMenu = css ` 
    padding:1.5rem 0;
    border-bottom: 1px solid rgba(0,0,0.2);
`

const sideBarNavList = css ` 
    flex-direction:column;
`

const headerNavList = css  ` 

`

const getNavItemStyle = (({right,sidebar}) => {
    if (right) {
        return righNavItem;
    };
    return sidebar ? sideBarMenu : NavItemMenu;
})

const getNavListStyle = (({sidebar}) => {
    if(sidebar) {
        return sideBarNavList;
    }
    return headerNavList;
})

export const HeaderWrapper = styled.div ` 
    position:fixed;
    top:0;
    left:0;
    right:0;
    min-height:6rem;
    display:flex;
    align-items:center;
    padding: 0 2rem;
    z-index:1;
`

export const Logo = styled(Link) ` 
    z-index:100;
    cursor: pointer;
    width:20%;
    & img {
        height:1.4rem;
        width:90%;
    }
`

export const NavMenu = styled.div ` 
    display:flex;
    justify-content:center;
    flex:1;
    
    @media only screen and (max-width:768px) {
        display:none;
    }
`

export const NavList = styled.ul `
    list-style:none;
    display:flex;
    ${getNavListStyle};
`

export const NavItem = styled.li ` 
    cursor: pointer;
    font-weight:600;
    text-transform:uppercase;
    flex-wrap:nowrap;
    ${getNavItemStyle};
`

export const RightMenu = styled.div ` 
    display:flex;
    align-items:center;
    @media only screen and (max-width:768px) {
        display:none;
        flex:1;
        justify-content:flex-end;
        margin-left:1rem;
    }
`

export const SideBarLabel = styled.label `
    position:relative;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    z-index: 3;
    box-shadow: 0 1rem 3rem rgba($color-black,.1);
    text-align: center;
    cursor: pointer;
    margin-left:1rem;

    &:hover {
        & span {
            &::before {
                top: -.8rem;
            }
            &::after {
                top: .8rem;
            }
        }
    }

    & span {
        position: relative;
        margin-top: 2.5rem;
        backface-visibility: hidden;

        &,
        &::before,
        &::after {
            width: 3rem;
            height: 2px;
            background-color: black;
            display: inline-block;
            transition: all .2s;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
        }

        &::before {
            top: -1rem;
        }

        &::after {
            top: 1rem;
        }
    }

    @media only screen and (max-width:768px) {
        flex:1 1 auto;
        align-self:center;
        text-align: right;
    }
`

export const BurgerNav = styled.div ` 
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width: 30rem;
    z-index:2;
    padding:2rem;
    transform:translateX(100%);
    transition: all .2s ease-in-out;
`

export const SideBarBackground = styled.div ` 

`

export const SideBarToggle = styled.input`
    display:none;
    &:checked {
        & ~ ${SideBarLabel} {

            & span {
                background-color:transparent;

                &::before {
                    transform: rotate(135deg);
                    top:0;
                }

                &::after {
                    transform: rotate(-135deg);
                    top:0;
                }
            }
        }

        & ~ ${BurgerNav} {
           transform:translateX(0);
        }

        & ~ ${SideBarBackground} {
            position:fixed;
            top:0;
            left:0;
            height:100vh;
            width:100%;
            background-color:rgba(0,0,0,.2);
        }
    }
`