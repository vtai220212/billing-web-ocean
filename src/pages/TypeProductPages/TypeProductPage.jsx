import React from 'react';
import CardComponent from '../../components/CardComponents/CardComponent';
import NavbarCategory from '../../components/NavbarCategoryComponents/NavbarCategory';
import { Col, Row, Pagination } from 'antd';

const TypeProductPage = () => {
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };
    return (
        <Row style={{ padding: '0 232px' }}>
            <Col
                span={4}
                style={{
                    paddingTop: '10px',
                }}
            >
                <NavbarCategory />
            </Col>
            <Col
                span={20}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <div
                    style={{
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        defaultCurrent={3}
                        total={500}
                    />
                </div>
            </Col>
        </Row>
    );
};

export default TypeProductPage;
