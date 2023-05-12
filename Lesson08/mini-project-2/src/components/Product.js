import React, { Component } from 'react';
import {MSG_BUY_SUCCESS} from '../constants/messages'
import {act_buy_item, act_change_notify} from '../actions'
import {connect} from 'react-redux'
class Product extends Component {
  constructor(props){
    super(props);
    this.state={
      quantity:1
    }
  }
  // xử lý khi người dùng chọn mua
  handleBuy = (product)=>{
    // thực hiện mua hàng
    this.props.buyItem(product,this.state.quantity)
    // thực hiện thông báo 
    this.props.changeNotify(MSG_BUY_SUCCESS)
  }
    render() {
        let {renderProduct} = this.props;
        console.log("Product:",renderProduct);
        let elementBuy = "";
        if(renderProduct.quantity > 0 ){
            elementBuy=<>
                <input
                  name="quantity-product-1"
                  type="number"
                  value={this.state.quantity}
                  min={1}
                  onChange={(ev)=>this.setState({quantity:ev.target.value})}
                />
                <button data-product={1} className="btn btn-success" 
                  onClick={()=>this.handleBuy(renderProduct)}
                  >
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
// tạo mapDispatchToProps 
const mapDispatchToProps=(dispatch)=>{
  return {
    // bắn action mua hàng đến reducer
    buyItem:(product,quantity)=>{
      dispatch(act_buy_item(product,quantity));
    },
    // bắn action làm thay đổi thông báo 
    changeNotify:(content)=>{
      dispatch(act_change_notify(content))
    }
  }
}
export default connect(null,mapDispatchToProps)(Product);