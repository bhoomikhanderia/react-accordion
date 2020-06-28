import React  from 'react';
import { connect } from 'react-redux';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { removeSelectProduct } from "../../redux/actions/removeSelectProduct";
import PanelContent from "../PanelContent";
import FontAwesome from 'react-fontawesome';

export const Panel = ({selectedProduct, removeSelectProduct}) => (
    <SlidingPanel
        type={'left'}
        isOpen={selectedProduct !== null && selectedProduct !== undefined}
        size={30}
        className="left-pane"
    >
        <div>
            <div className="btn" onClick={() => {removeSelectProduct()}}>
                <FontAwesome name="times" size="2x"/>
            </div>
            <PanelContent product={selectedProduct} />
        </div>
    </SlidingPanel>
)


export const mapStateToProps = ({ products, selectedProduct }) => {
    return {
        products: products,
        selectedProduct: selectedProduct
    }
}

export default connect(mapStateToProps , { removeSelectProduct })(Panel);
