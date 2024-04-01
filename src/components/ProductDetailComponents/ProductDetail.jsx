import React from 'react';
import { Row, Col, Image, InputNumber } from 'antd';
import {
    ProductDetailName,
    ProductDetailDescription,
    ProductDetailPrice,
    ProductDetailDescriptionItem,
    ProductSale,
    ProductQuantity,
    ProductInputNumber,
} from './style';

import ButtonComponent from '../ButtonComponents/ButtonComponent';

import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const ProductDetail = () => {
    return (
        <Row>
            <Col
                span={10}
                style={{
                    padding: '20px 20px',
                    borderRight: '1px solid #f0f0f0',
                }}
            >
                <Image src="https://i.pinimg.com/originals/cc/6a/01/cc6a0174a8060c4be4a03f0592c8f750.jpg" />
            </Col>
            <Col span={14} style={{ padding: '20px 20px' }}>
                <ProductDetailName>Gói 8VT</ProductDetailName>
                <div style={{ padding: '10px' }}>
                    <StarFilled
                        style={{
                            color: 'rgb(253, 216, 54)',
                            fontSize: '20px',
                        }}
                    />
                    <ProductSale> | Đã bán 300</ProductSale>
                </div>
                <ProductDetailDescription>
                    <ProductDetailDescriptionItem>
                        Báo vị trí: 8 tin/ ngày
                    </ProductDetailDescriptionItem>
                    <ProductDetailDescriptionItem>
                        Thời hạn: 30 ngày
                    </ProductDetailDescriptionItem>
                    <ProductDetailDescriptionItem>
                        Điện khẩn cấp SOS
                    </ProductDetailDescriptionItem>
                    <ProductDetailDescriptionItem>
                        Dự báo thời tiết ( cho người dùng trên đất liền và dưới
                        biển )
                    </ProductDetailDescriptionItem>
                </ProductDetailDescription>
                <ProductDetailPrice>290.000đ</ProductDetailPrice>

                <ProductQuantity>
                    <div style={{ padding: '10px', fontSize: '18px' }}>
                        Sô lượng:
                    </div>
                    <div>
                        <div
                            style={{
                                padding: '10px',
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                width: '130px',
                            }}
                        >
                            <span
                                style={{
                                    padding: '5px',
                                    border: '1px solid #f0f0f0',
                                    borderRadius: '4px 0px 0px 4px',
                                    height: '30px',
                                    alignItems: 'center',
                                }}
                            >
                                <MinusOutlined
                                    style={{
                                        fontSize: '23px',
                                    }}
                                />
                            </span>
                            <ProductInputNumber
                                min={1}
                                max={10}
                                defaultValue={3}
                                // onChange={onChange}
                            />

                            <span
                                style={{
                                    padding: '5px',
                                    border: '1px solid #f0f0f0',
                                    borderRadius: '0 4px 4px 0',
                                    height: '30px',
                                    alignItems: 'center',
                                }}
                            >
                                <PlusOutlined
                                    style={{
                                        fontSize: '23px',
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                </ProductQuantity>

                <div style={{ padding: '0 10px' }}>
                    <ButtonComponent
                        size="large"
                        styleButton={{
                            background: '#1890ff',
                            color: 'white',
                            width: '200px',
                            height: '40px',
                            border: 'none',
                            borderRadius: '4px',
                        }}
                        textButton="Mua ngay"
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    );
};

export default ProductDetail;
