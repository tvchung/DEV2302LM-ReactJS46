import React, { Component } from 'react';

class Product extends Component {
    render() {
        let {renderProduct} = this.props;
        let elementBuy = "";
        if(renderProduct.quantity > 0 ){
            elementBuy=<>
                <input
                  name="quantity-product-1"
                  type="number"
                  value={renderProduct.quantity}
                  min={1}
                />
                <button data-product={1} className="btn btn-success">
                  Mua hàng
                </button>
                <a data-product={1} href="#" className="price">
                  
                  {renderProduct.price} USD
                </a>
            </>
        }else{
            elementBuy=<span className="price">  {renderProduct.price} USD</span>;
        }
        return (
            <div className="media product">
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    // src="images/aplusautomation.jpg"
                    src={`images/${renderProduct.image}`}
                    alt="charmander"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{renderProduct.productName} </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  At dicta asperiores veniam repellat unde debitis quisquam
                  magnam magni ut deleniti!
                </p>
                {elementBuy}
              </div>
            </div>
        );
    }
}

export default Product;