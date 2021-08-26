import styled from 'styled-components';

export const Wrap = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:100vh;
    background-image: ${({backgroundImg}) => `url(./assets/images/${backgroundImg})`};
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
`

export const ItemText = styled.div `
    width:100%;
    text-align:center;
    padding-top:15vh;
`

export const ButtonGroup = styled.div `
    display:flex;
    margin-bottom:3rem;

    @media only screen and (max-width:768px) {
        flex-direction:column;
    }
`
export const DownArrow = styled.img ` 
    margin-bottom:.1rem;
    height:4rem;
    cursor: pointer;
    animation: animateDown infinite 1.5s;

    @keyframes animateDown {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform:translateY(0);
        }

        40% {
            transform:translateY(.5rem);
        }

        60% {
            transform:translateY(.3rem);
        }
    }
`

export const ButtonsWrapper = styled.div ` 
    text-align:center;
`