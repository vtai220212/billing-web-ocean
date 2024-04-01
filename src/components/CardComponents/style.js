import { Card } from 'antd';
import styled from 'styled-components';

export const CardProduct = styled(Card)`
    width: 100%;
    margin: 10px 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    background-color: #f0f0f0;
    border: none;
`;

export const CardPriceProduct = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
    text-align: center;
`;

export const CardNotify = styled.div`
    font-size: 18px;
    color: #000;
    margin-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    text-align: center;
`;

export const CardHelper = styled.div`
    font-size: 18px;
    color: #000;
    margin-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    text-align: center;
    max-height: 2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const CardMore = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 7.5px 0px;
    border-bottom: 1px solid rgb(236, 236, 236);
`;
export const CardButtonBuy = styled.button`
    background-color: #307acc;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #000;
    }
`;
