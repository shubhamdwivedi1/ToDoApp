import React,{Component} from 'react'

class Eight extends Component{
    f1(){
        let arr = [1,2,3,4,5,69]
        let b = arr.reduce((acc,curr)=> acc+curr);
        return b;
    }
    render(){
        return <div>{this.f1()}</div>
    }
} 

export default Eight