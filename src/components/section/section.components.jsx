import React from 'react'
import {
    Wrap,
    ItemText,
    ButtonGroup,
    DownArrow,
    ButtonsWrapper
} from './section.styles';

import Fade from 'react-reveal/Fade';

import CustomButton from '../custom-button/custom-button.components';

function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {

    const handleOnClick = (e) => {
        const screenY = window.innerHeight;
        const {scrollY} = e.view;
        
        window.scrollTo(0,scrollY+screenY);
    }

    return (
        <Wrap backgroundImg={backgroundImg} >
            <Fade bottom>

                <ItemText>
                    <h1>{title}</h1>
                    <span>{description}</span>
                </ItemText>
                            
            </Fade>
            
            <ButtonsWrapper>

                <Fade bottom>

                    <ButtonGroup>
                        <CustomButton left>
                            {leftBtnText}
                        </CustomButton>
                        {
                            rightBtnText 
                            &&
                            <CustomButton right>
                                {rightBtnText}
                            </CustomButton>
                        }

                    </ButtonGroup>

                    <DownArrow src='./assets/images/down-arrow.svg' onClick={handleOnClick} />

                </Fade>
            </ButtonsWrapper>
        </Wrap>
    )
}

export default Section
