import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button} from "react-bootstrap";

const Products = ({ products }) => {
    return products.map((category, index) => (
        <Accordion key={index} defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={'category' + index}>
                        {category.name}
                    </Accordion.Toggle>
                </Card.Header>
                
            </Card>
        </Accordion>
    ))
}

export default Products
