import React from 'react';
import { Link } from 'react-router-dom';

const TypeProduct = ({ name }) => {
    return (
        <div>
            <div
                style={{
                    padding: '0 30px',
                    backgroundColor: '#307acc',
                    borderLeft: '1px solid rgba(255, 255, 255, 1)',
                }}
            >
                <Link
                    style={{
                        color: '#fff',
                        textDecoration: 'none',
                    }}
                >
                    {name}
                </Link>
            </div>
        </div>
    );
};

export default TypeProduct;
