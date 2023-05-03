// tạo reducer cho các hành động thay đổi trên form

// sử dụng các hằng
import * as types from '../constants'

// Khởi tạo state
const initialState = {
    userName:"Redux-Demo ------------- Devmaster",
    courseName:"Redux-ReactJS"
}

// tạo reducer
const reducer = (state=initialState, action) =>{
    // Thực hiện cập nhật state theo action
    switch (action.type) {
        case types.CHANGE_USERNAME:
            return{
                ...state, // clone state cũ
                userName:action.payload, // cập nhật lại userName
            }
        case types.CHANGE_COURSENAME:
            return{
                ...state, // clone state cũ
                courseName:action.payload, // cập nhật lại courseName
            }
        default:
            return state;
    }

    // return state;
}

export default reducer;