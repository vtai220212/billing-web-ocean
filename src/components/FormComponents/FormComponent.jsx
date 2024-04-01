import React from 'react';
import { useState } from 'react';
import { WrapperInputStyle } from '.';

const FormComponent = (props) => {
    const [valueInput, setValueInput] = useState('');
    const { placeholder = 'Vui lòng nhập tài khoản', ...rests } = props;
    return (
        <>
            <WrapperInputStyle
                placeholder={placeholder}
                valueInput={valueInput}
                {...rests}
            />
        </>
    );
};

export default FormComponent;
