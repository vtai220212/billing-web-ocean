import styled from 'styled-components';
import { Row } from 'antd';

export const WrapperHeader = styled(Row)`
    background-image: linear-gradient(320deg, #014871, #d7ede2);
    padding: 20px 232px;
    align-items: center;
    flex-wrap: nowrap;
    gap: 16px;
`;
export const WrapperImage = styled.img`
    width: 150px;
    max-height: 50px;
    object-fit: cover;
`;

export const WrapperAccountHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const WrapperSpanHeader = styled.span`
    color: white;
    font-size: 16px;
    padding: 10px 0;
`;
