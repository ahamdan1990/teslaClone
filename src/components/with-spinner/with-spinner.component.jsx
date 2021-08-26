import React from 'react';

import {
    SpinnerOverlay,
    SpinnerContainer
} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {

    return isLoading ? 
        (
            <SpinnerOverlay>
                <SpinnerContainer src='./assets/images/Tesla_Motors.svg' alt="tesla_logo"/>
            </SpinnerOverlay>
        )
        : 
        (
            <WrappedComponent isLoading={isLoading} {...otherProps} /> 
        )
}

export default WithSpinner;