import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button} from "react-bootstrap";
import SubCategory from "../SubCategories"

const Products = ({ products }) => {
    console.log("in products");
    return products.map((category, index) => (
        <Accordion key={index} defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={'category' + index}>
                        <span className="cat-name">{category.name}</span>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={'category' + index}>
                    <Card.Body>
                        <SubCategory subcategories={category.items} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    ))
}

export default Products
