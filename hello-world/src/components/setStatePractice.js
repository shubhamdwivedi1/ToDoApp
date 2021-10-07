import React, { Component } from 'react'

export class setStatePractice extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    increment(){
        this.state.count = this.state.count + 1
        console.log(this.state.count)
        return 
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => increment()}>Increment</button>
            </div>
        )
    }
}

export default setStatePractice
