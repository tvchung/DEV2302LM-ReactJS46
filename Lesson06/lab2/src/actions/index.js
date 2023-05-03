// action khi người dùng thay đổi trên ô input
import * as types from '../constants';

//  action khi người dùng thay đổi trên ô username
export const actChangeUserName = (value)=>{
    return {
        type: types.CHANGE_USERNAME, // Change/UserName
        payload:value
    }
}

// action khi người dùng thay đổi trên coursename
export const actChangeCourseName = (value)=>{
    return {
        type: types.CHANGE_COURSENAME, // Change/CourseName
        payload:value
    }
}
