import React, { Component } from 'react';
import * as Messages from './../constans/Message';

class Product extends Component {
    render() {
        var {product} = this.props;
 
       
   
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}  className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.discription}
                    </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    data-original-title="Add to Cart"
                                    onClick={()=>this.onAddToCart(product)}>
                                    <i className="fa fa-shopping-cart"  ></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart =(product) =>{
      this.props.onAddToCart(product);
      this.props.onChangeMessage(Messages.MSG_ADD_TO_CART_SUCCESS);
    }
    showRating(rating){
        var result =[];
        for(var j=1 ; j <= rating; j++){
            result.push(<i key={j} className="fa fa-star"></i>);
        };
        for(var k=1 ; k <= (5 - rating); k++){
            result.push(<i key={5-k+1} className="fa fa-star-o"></i>);
        };
        return result;
    }   
    
   
   
}


export default Product;
