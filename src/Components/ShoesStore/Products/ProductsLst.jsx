import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import dataShoes from "./../../../data/data_giay.json";
import ProductItem from './ProductItem';

export default class ProductsLst extends Component {
    // state = {
    //     shoes: dataShoes[0],
    // }

    renderProductLst = () => {
        const content = dataShoes.map((product) => {
            return (
                <ProductItem item={product} key={product.id}></ProductItem>
            );
        });
        return content;
    };

    // setStateModal = (product) => {
    //     this.setState({
    //         shoes: product,
    //     })
    // }

    render() {
        return (
            <>
                <div className="row">
                    {this.renderProductLst()};
                </div>
                <Modal></Modal>
            </>
        )
    }
}
