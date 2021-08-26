import styled from 'styled-components';

export const SpinnerOverlay = styled.div ` 
    height:60vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const SpinnerContainer = styled.img ` 
    height:5rem;
    animation: rotateLogo infinite 2s;

    @keyframes rotateLogo {
        to {
            transform:rotateY(360deg);
        }
    }
`