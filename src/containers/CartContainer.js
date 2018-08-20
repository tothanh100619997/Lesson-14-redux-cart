import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constans/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { actDeleteProductInCart, actChangeMessage, actUpDateProductInCart } from './../actions/index';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (

            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>


        );

    }
    showCartItem = (cart) => {
        var { onDeteteProduct, onChangeMessage, onUpDateProductInCart } = this.props;
        var result = <tr>
            <td>{Message.MSG_EMPTY_Cart}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDeteteProduct={onDeteteProduct}
                    onChangeMessage={onChangeMessage}
                    onUpDateProductInCart={onUpDateProductInCart}
                ></CartItem>
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult
                cart={cart}
            ></CartResult>
        }
        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            discription: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quatity: PropTypes.number.isRequired
    })).isRequired,
    onDeteteProduct: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpDateProductInCart: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeteteProduct: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpDateProductInCart: (product, quatity) => {
            dispatch(actUpDateProductInCart(product, quatity));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
