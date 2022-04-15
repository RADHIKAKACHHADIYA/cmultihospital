import React from 'react';
import {LinkButton, PrimaryButton } from './Button.style';

export const ButtonType = {
    PRIMARY : "PRIMARY",
    LINK : "LINK"
}

function Button({buttonType, children ,...rest}) {
    // console.log(buttonType === ButtonType.PRIMARY)
    if (buttonType === ButtonType.PRIMARY) {
        return (
            <PrimaryButton {...rest}>
                {children}
            </PrimaryButton>
        )
    } else if (buttonType === ButtonType.LINK) {
        return (
            <LinkButton {...rest}>
                {children}
            </LinkButton>
        )
    }
    return (
        <div>
            
        </div>
    );
}

export default Button;