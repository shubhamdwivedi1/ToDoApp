import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             count : 0
        }
    }
    
    countValues(){
        this.setState({
            count : this.state.count + 1
        })
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h1>Count- {this.state.count}</h1>
                <button onClick={() => this.countValues()}>Play</button>
                
            </div>
        )
    }
}

export default Counter
