// combbine reducer
import {combineReducers} from 'redux'

import listProduct from './listProduct'

const reducer = combineReducers({
    listProduct:listProduct,

})

export default reducer;