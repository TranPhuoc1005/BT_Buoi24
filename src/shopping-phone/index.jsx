import React, { useState } from 'react';
import Phone from './phone';
import TechDetail from './tech-detail';
import data from './data.json';

export default function ShoppingPhone() {
    const [listProduct, setListProduct] = useState(data);
    const [productDetail, setProductDetail] = useState(listProduct[0]);
    const renderListProduct = () => {
        return listProduct.map((product) => {
            return <Phone key={product.maSP} product={product} getProduct={handleGetProduct} />
        })
    }
    const handleGetProduct = (product) => {
        setProductDetail(product);
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl text-center mb-5'>Shopping Phone</h1>
            <div className='grid grid-cols-3'>
                {renderListProduct()}
            </div>
            <TechDetail productDetail={productDetail} />
        </div>
    )
}
