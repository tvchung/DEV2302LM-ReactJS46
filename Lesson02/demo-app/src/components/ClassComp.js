// 1. Import
import {React,Component} from 'react'
// 2. Tạo class component
/*
    input: props
    output: React Element
*/
class ClassComp extends Component{
    render(){
        return(
            <div>
                <hr/>
                <h2>Tôi là class component</h2>
                <h3>Sử dụng props </h3>
                <p> Name: <b>{this.props.name}</b></p>
                <p> Add: <b>{this.props.address}</b></p>
            </div>
        )
    }
}
// 3. export
export default ClassComp;