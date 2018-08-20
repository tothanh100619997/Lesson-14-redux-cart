import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';

class ProductContainer extends Component {

    render() {
        var { products } = this.props;
        
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }

    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            var { onAddToCart, onChangeMessage } = this.props;
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        }
        return result;
    }
   
}

ProductContainer.propTypes = {
   
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            discription: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })

    ).isRequired  ,
    message:PropTypes.string.isRequired,
    onAddToCart:PropTypes.func.isRequired,
    onChangeMessage:PropTypes.func.isRequired



    

}
const mapStateToProps = state => {
    return {
        products: state.products,
        message: state.message
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
