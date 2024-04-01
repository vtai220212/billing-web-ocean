import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent';

export const WrapperButtonMore = styled(ButtonComponent)`
    margin: 20px auto;
    display: block;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: #307acc;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background: #000;
        color: #fff;
    }
`;
