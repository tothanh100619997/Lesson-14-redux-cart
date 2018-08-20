import * as Types from './../constans/ActionType';
export const actAddToCart = (product, quatity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quatity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpDateProductInCart = (product, quatity) => {
    return {
        type : Types.UP_DATE_PRODUCT_IN_CART,
        product,
        quatity

    }
}