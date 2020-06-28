import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "react-bootstrap";
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/actions/selectProduct';

const BASE_URL = "https://www.aesop.com/au/api/v1/nav/shop";

const ProductCard = ({ items, selectProduct }) => {
    if (items && items.length > 0) {
        let itemsUnderRows = []
        items.forEach((category, index) => {
            if (index % 4 === 0) {
                itemsUnderRows.push([])
            }
            const lastRow =
                itemsUnderRows[itemsUnderRows.length - 1]
            lastRow.push(category)
        })
        return itemsUnderRows.map((itemsUnderRow, rowIndex) => (
            <Row key={rowIndex} className="row-margin">
                {itemsUnderRow.map((tmpProduct, itemIndex) => {
                    let product = tmpProduct
                    return (
                        <div
                            key={itemIndex}
                            className="row-item col-xs-12 col-sm-4 col-md-3 product-card"
                            onClick={() => selectProduct(product)}
                        >
                            <div key={product.name} className="image-container">
                                <img className="product-img"
                                     id={'image-' + product.name}
                                     src={BASE_URL + (product.thumbnail || product.imageUrl)}
                                     alt={product.name}
                                />
                                <div className="card-details">
                                    <strong>{product.name}</strong>
                                    <br/>
                                    <div className="card-desc">{product.shortDescription}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Row>
        ))
    } else return null;
}

export const mapStateToProps = ({ selectedProduct }) => {
    return {
        selectedProduct: selectedProduct
    }
}

export default connect(mapStateToProps , { selectProduct })(ProductCard);
