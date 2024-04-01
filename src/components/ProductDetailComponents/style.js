import { Input, InputNumber } from 'antd';
import styled from 'styled-components';

export const ProductDetailName = styled.h2`
    font-size: 30px;
    padding: 0 10px;
`;

export const ProductDetailDescription = styled.p`
    font-size: 18px;
    padding: 5px 10px;
`;

export const ProductDetailDescriptionItem = styled.span`
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
`;

export const ProductDetailPrice = styled.p`
    font-size: 25px;
    padding: 0 10px;
`;

export const ProductDetailButton = styled.button`
    font-size: 18px;
    margin: 0 10px;
    padding: 10px 10px;
    background-color: #1890ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export const ProductSale = styled.span`
    font-size: 20px;
    color: red;
`;

export const ProductInputNumber = styled.input`
    width: 50px;
    height: 30px;
    text-align: center;
    border: none;
    border: 1px solid #f0f0f0;
`;

export const ProductQuantity = styled.div`
    align-items: center;
    padding: 10px;
    width: 100%;
`;
