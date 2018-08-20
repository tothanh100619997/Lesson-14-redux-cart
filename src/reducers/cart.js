import * as Types from './../constans/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
const cart = (state = initialState, action) => {
    var { product, quatity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART: {

            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quatity += quatity;
            } else {
                state.push({
                    product,
                    quatity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        }
        case Types.DELETE_PRODUCT_IN_CART: {
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index,1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        case Types.UP_DATE_PRODUCT_IN_CART:{
            index = findProductInCart(state, product);
            if (index !== -1) {
               state[index].quatity= action.quatity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
      
        default: return [...state];
    }
}
var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cart;
