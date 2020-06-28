import React from 'react';
import {Accordion, Button, Card} from "react-bootstrap";

const BASE_URL = "https://www.aesop.com/au/api/v1/nav/shop";

const showVariants = (variants) => {
    return variants.map((variant, index) => {
        return (
            <Accordion key={index} defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link"
                                          eventKey={'variant' + index}>
                            <h4 className="cat-name">{variant.name || variant.imageAlt}</h4>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={'variant' + index}>
                        <Card.Body>
                            <div>
                                
                                <img className="product-img"
                                     id={'image-' + variant.name}
                                     src={BASE_URL + (variant.thumbnail || variant.imageUrl)}
                                     alt={variant.imageAlt} />
                                <p>SKU: {variant.sku}</p>
                                <p>Price: {variant.price}</p>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    })
}

const PanelContent = ({product}) => {
    if (product) {
        return  (
            <div>
                <h3>{product.name}</h3>
                {showVariants(product.variants)}
            </div>
        )
    } else return null;
}

export default PanelContent
