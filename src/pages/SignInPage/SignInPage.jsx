import React from 'react';
import {
    WrapperContainerLeft,
    WrapperContainerRight,
    WrapperForgotPassword,
} from './style';
import FormComponent from '../../components/FormComponents/FormComponent';
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent';
import { Divider, Image } from 'antd';

const SignInPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: '#f0f2f5',
            }}
        >
            <div
                style={{
                    width: '800px',
                    height: '440px',
                    borderRadius: '6px',
                    background: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <WrapperContainerLeft>
                    <h2>SignInPageContainer</h2>
                    <p>Đăng nhập hoặc tài khoản</p>
                    <FormComponent
                        style={{
                            marginBottom: '10px',
                        }}
                        placeholder="Vui lòng nhập tên tài khoản hoặc email"
                    />

                    <FormComponent
                        style={{ marginBottom: '10px' }}
                        placeholder="Vui lòng nhập mật khẩu"
                    />

                    <ButtonComponent
                        size="large"
                        styleButton={{
                            background: '#1890ff',
                            color: 'white',
                            width: '100%',
                            height: '40px',
                            border: 'none',
                            borderRadius: '4px',
                        }}
                        textButton="Đăng nhập"
                    ></ButtonComponent>

                    <div
                        style={{
                            padding: '10px 0',
                        }}
                    >
                        <WrapperForgotPassword>
                            Quên mật khẩu
                        </WrapperForgotPassword>
                        <p>
                            Bạn chưa có tài khoản?
                            <WrapperForgotPassword>
                                Đăng ký ngay
                            </WrapperForgotPassword>
                        </p>
                    </div>
                </WrapperContainerLeft>

                <WrapperContainerRight>
                    <Image
                        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                        alt="image"
                        width="200px"
                        height="200px"
                        preview={false}
                        style={{
                            borderRadius: '50%',
                        }}
                    />
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignInPage;
