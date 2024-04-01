import React from 'react';
import {
    WrapperLabelText,
    WrapperContentNavbar,
    WrapperItem,
    WrapperPrice,
    WrapperNavbarCategory,
} from './style';

const NavbarCategory = () => {
    const renderCategory = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperContentNavbar>{option}</WrapperContentNavbar>
                    );
                });
            case 'price':
                return options.map((option) => {
                    return <WrapperPrice>{option}</WrapperPrice>;
                });
            default:
                return {};
        }
    };
    return (
        <div>
            <WrapperNavbarCategory>
                <WrapperLabelText>Danh mục sản phẩm</WrapperLabelText>
                <WrapperItem>
                    {renderCategory('text', ['V8T', 'V12T', 'V16T'])}
                </WrapperItem>
                <WrapperItem>
                    {renderCategory('price', [
                        'Dưới 100.000',
                        'Trên 500.000',
                        'Trên 1.000.000',
                    ])}
                </WrapperItem>
            </WrapperNavbarCategory>
        </div>
    );
};

export default NavbarCategory;
