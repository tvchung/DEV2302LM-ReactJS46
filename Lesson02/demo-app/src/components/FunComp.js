//1. import
import {React} from 'react'
//2. tạo function component 
/*
    - input: props
    - output: react element
*/
function FunComp(props){
    return(
        <div>
            <h2>Tôi là function component</h2>
            <p>Xin chào ReactJs</p>
            <h3>Sử dụng props</h3>
            <p>Name:{props.name}</p>
            <p>Company:<b>{props.company}</b></p>
        </div>
    )
}
//3. export
export default FunComp;