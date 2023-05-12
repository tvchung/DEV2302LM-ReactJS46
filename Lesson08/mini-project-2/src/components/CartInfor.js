import React, { Component } from 'react';

class CartInfor extends Component {
    render() {
      let {renderCart} = this.props;
      console.log("cartInfor:",renderCart);
      let elementCartInfo = <tr><th colSpan={"6"}>
            Chưa có sản phẩm nào trong giỏ hàng.
          </th></tr>;
      if(renderCart !==null && renderCart.length>0){
        // tính tổng giá
        let tongTriGia=0;
        for (let i = 0; i < renderCart.length; i++) {
          tongTriGia += parseFloat(renderCart[i].product.price) * parseFloat(renderCart[i].quantity);
        }
        elementCartInfo=(
          <tr>
                  <td colSpan={4}>
                    There are <b>{renderCart.length}</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {tongTriGia} USD
                  </td>
                </tr>
        )
      }
        return (
            <>
                {elementCartInfo}
            </>
        );
    }
}

export default CartInfor;