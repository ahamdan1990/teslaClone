import styled from 'styled-components';

export const HomePageWrapper = styled.div `
    height:100vh;
    width:100%;
`

export const PopupRegionWrapper = styled.div `
    background-color:rgba(0,0,0,.5);
    height:100vh;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    backdrop-filter:rgba(0,0,0,.3);
`

export const PopupContent = styled.div `
    text-align:center;
    box-shadow: rgba(255,255,255, 0.35) 0px 5px 15px;
    position:fixed;
    top:50%;
    left:50%;
    height:90vh;
    width:42.8rem;
    background-color:white;
    transform:translate(-50%,-50%);
    border-radius:1rem;
    padding: 3.2rem 2.4rem 1.6rem;
    overflow:auto;
    & li {
        list-style:none;
        padding:1rem 0;
        border-bottom:1px solid rgba(0,0,0,.35);
        cursor:pointer;

        &:hover {
            color:black;
            & span {
                transition: all .2s ease;
                border-bottom:1px solid black;
            }
        }
    }
`