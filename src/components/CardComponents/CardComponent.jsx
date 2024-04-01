import React from 'react';
import {
    CardPriceProduct,
    CardNotify,
    CardHelper,
    CardMore,
    CardProduct,
    CardButtonBuy,
} from './style';

const CardComponent = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
            }}
        >
            <CardProduct title="Gói 8VT" bordered={false} align="center">
                <CardPriceProduct>290,000 đ/tháng</CardPriceProduct>
                <CardNotify>Báo vị trí 8 tin/ngày</CardNotify>
                <CardHelper>Gọi khẩn cấp SOS</CardHelper>
                <CardMore>
                    <CardButtonBuy>Đặt dịch vụ</CardButtonBuy>
                </CardMore>
            </CardProduct>
        </div>
    );
};

export default CardComponent;
