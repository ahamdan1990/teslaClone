import styled, {css} from 'styled-components';

const left = css ` 
    background-color:rgba(23,26,32,.8);
    color:white;
`

const right = css ` 
    background-color:white;
    opacity:.65;
    color:black;
`

const getButtonStyles = props => {
    if (props.left) {
        return left;
    }

    return right;
}

export const CustomButtonContainer = styled.button ` 
    border:none;
    cursor: pointer;
    letter-spacing:.1rem;
    height:4rem;
    width:25.6rem;
    border-radius:10rem;
    opacity:.85;
    text-transform:uppercase;
    font-size:1.2rem;
    display:block;
    margin:.8rem;
    ${getButtonStyles};
`