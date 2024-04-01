import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponents/InputComponent';
import ButtonComponent from '../ButtonComponents/ButtonComponent';
const ButtonInputSearch = (props) => {
    const {
        placeholder,
        size,
        textButton,
        bordered,
        backgroundColorInput = '#fff',
        backgroundColorButton = '#82A0D8',
        colorButton = '#fff',
    } = props;

    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <InputComponent
                size={size}
                placeholder={placeholder}
                style={{
                    backgroundColor: backgroundColorInput,
                    borderRadius: '0px',
                    border: 'none',
                }}
            />
            <ButtonComponent
                size={size}
                style={{
                    color: colorButton,
                    fontWeight: '400',
                    backgroundColor: backgroundColorButton,
                    border: !bordered && 'none',
                    borderRadius: '0px',
                }}
                icon={<SearchOutlined />}
                textButton={textButton}
            >
                <span>{textButton}</span>
            </ButtonComponent>
        </div>
    );
};

export default ButtonInputSearch;
