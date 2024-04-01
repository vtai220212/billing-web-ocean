import { Badge, Col, Input } from 'antd';
import {
    WrapperHeader,
    WrapperImage,
    WrapperAccountHeader,
    WrapperSpanHeader,
} from './style';
import Logo from '../../assets/images/logo1.png';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputsSearch/ButtonInputSearch';

function HeaderComponent() {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperImage src={Logo} alt="" />
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size="large"
                        textButton="Tìm kiếm"
                        placeholder="Nhâp từ khóa tìm kiếm..."
                        // allowClear
                        enterButton
                        // onSearch={onSearch}
                    />
                </Col>
                <Col
                    span={6}
                    style={{
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'center',
                    }}
                >
                    <WrapperAccountHeader>
                        <UserOutlined
                            style={{
                                fontSize: '30px',
                                color: '#fff',
                            }}
                        />
                        <div>
                            <WrapperSpanHeader>
                                Đăng nhập | Đăng ký
                            </WrapperSpanHeader>
                            <div>
                                <WrapperSpanHeader>Tài khoản</WrapperSpanHeader>
                                <CaretDownOutlined style={{ color: '#fff' }} />
                            </div>
                        </div>
                    </WrapperAccountHeader>
                    <div>
                        <div>
                            <Badge count={4} size="small">
                                <ShoppingCartOutlined
                                    style={{ fontSize: '30px', color: '#fff' }}
                                />
                            </Badge>
                            <WrapperSpanHeader>Giỏ hàng</WrapperSpanHeader>
                        </div>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponent;
