import React, { Component } from 'react';
import * as Message from './../constans/Message';

class CartItem extends Component {
   
    render() {
    
        
        var {item} = this.props;
        
      return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quatity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light" onClick ={()=>this.onUpDateCart(item.product,item.quatity -1)}>
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light" onClick ={()=>this.onUpDateCart(item.product,item.quatity +1)}>
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showPrice(item.product.price,item.quatity)}$</td>
                <td>
                    <button type="button" 
                            className="btn btn-sm btn-primary waves-effect waves-light" 
                            data-toggle="tooltip" 
                            ata-placement="top"
                            title="Xóa sản phẩm" 
                            data-original-title="Remove item"
                            onClick ={()=>this.onDelete(item.product)}
                            >                            
                        X
                    </button>
                </td>
        </tr>
        );
    }
    onUpDateCart =(product,quatity) =>{
        if(quatity > 0){
          
            this.props.onUpDateProductInCart(product,quatity);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART)
        }
    }
    onDelete =(product) =>{
        this.props.onDeteteProduct(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART)
    }
    showPrice =(price,quatity) =>{
        return price*quatity;
    }
}


export default CartItem;
