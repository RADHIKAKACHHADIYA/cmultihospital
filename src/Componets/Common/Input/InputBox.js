
import React from 'react';
import { InputBoxStyle, InputError } from './InputBox.style';

function InputBox({children, errors=false , errorMessage='' ,...rest}) {
    return (
        <>
            <InputBoxStyle {...rest}>
                {children}
            </InputBoxStyle>
            <InputError
                display={{errors:errors}}
            >
                {errorMessage}
            </InputError>
        </>
    );
}

export default InputBox;