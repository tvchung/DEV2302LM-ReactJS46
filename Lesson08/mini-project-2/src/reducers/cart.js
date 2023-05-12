import { BUY_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../constants/actionTypes";
import { LOCAL_STORAGE_NAME } from "../constants/localStorageName";


// chưa mua hàng
let initialState = [];
// Đã mua hàng --> get localStorage
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
initialState = (shoppingCartLocal !=null && shoppingCartLocal.length>=0)?
    shoppingCartLocal:[];

// Hàm kiểm tra xem trong giỏ hàng đã có sản phẩm hay chưa
const getIndexByProduct=(list,product)=>{
    for (let index = 0; index < list.length; index++) {
        if(list[index].product.productId===product.productId){
            return index;// sản phẩm đã tồn tại trong giở hàng
        }
    }
    // Nếu không tìm thấy (sản phẩm chưa tồn tại trong giở hàng)
    return -1;
}
// Tạo reducer -> cart
const cart=(state=initialState,action)=>{
    // lấy sản phẩm, số lượng từ action
    let {product,quantity} = action;
    let item = {product,quantity};
    let index = -1;
    switch (action.type) {
        case BUY_ITEM:
            if(state.length === 0){
                // khách hàng chưa mua hàng -- giỏ hàng của khách chưa có sp
                // -> push vào giỏ hàng
                state.push(item);
            }else{
                // Khách hàng đã mua hàng -- giỏ hàng của khách đã tồn tại
                index = getIndexByProduct(state,product);
                if(index>=0){
                    // Nếu sản phẩm đã có trong giỏ hàng => tăng số lượng
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity);
                }else{
                    // Nếu sản phẩm chưa có trong giỏ hàng ==> thêm sản phẩm vào giỏ hàng
                    state.push(item);
                }
            }
            // Cập nhật localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            return [...state];
        // Cập nhật giỏ hàng
        case UPDATE_ITEM:
            // tìm kiếm sản phẩm trong giỏ hàng để cập nhật
            index = getIndexByProduct(state, product);
            if(index>=0){
                state[index].quantity = parseInt(item.quantity);
            }
            // cập nhật localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            return [...state];
        // xóa sản phẩm trong giỏ hàng
        case REMOVE_ITEM:
            // Tìm kiếm sản phẩm cần xóa
            index = getIndexByProduct(state,product)
            if(index>=0){
                state.splice(index,1);
            }
            // Cập nhật localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            return [...state];
        default:
           return state;
    }
}
export default cart;