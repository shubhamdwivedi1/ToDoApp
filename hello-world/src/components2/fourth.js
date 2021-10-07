import React, {Component} from 'react'

class Fourth extends Component{

     total() {
        var arr = [1,2,3,4,5,6]
        let b = arr.reduce((acc,curr) => acc+curr);
        return b;
    }
    
    render()
        {
            return <p>{this.total()}</p>
        }
    }


export default Fourth