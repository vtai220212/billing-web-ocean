import React from 'react';
import TypeProduct from '../../components/TypeProducts/TypeProduct';
import { WrapperTypeProduct } from '../../components/TypeProducts/style';
import SlideComponent from '../../components/SlideComponents/SlideComponent';
import slider1 from '../../assets/images/slide1.png';
import slider2 from '../../assets/images/slide2.png';
import slider3 from '../../assets/images/slide3.png';
import CardComponent from '../../components/CardComponents/CardComponent';

import { WrapperButtonMore } from './style';

function HomePage() {
    const arrs = [
        'GIỚI THIỆU',
        'DỊCH VỤ CÔNG',
        'HỆ THỐNG TTDH',
        'GÓI DỊCH VỤ',
        'KHÁCH HÀNG',
        'LIÊN HỆ',
    ];

    return (
        <div>
            <WrapperTypeProduct>
                {arrs.map((item) => (
                    <TypeProduct name={item} key={item} />
                ))}
            </WrapperTypeProduct>

            <div id="container" style={{ height: '1000px' }}>
                <SlideComponent arrImages={[slider1, slider2, slider3]} />
                <div style={{ paddingTop: '50px' }}>
                    <div
                        style={{
                            padding: '20px 232px',
                            marginTop: ' 0 100px',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
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
                    </div>
                </div>
                <div>
                    <WrapperButtonMore textButton="Xem thêm" type="outline" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
