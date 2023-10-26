import React from "react";

import { Component } from "react";


class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: this.state.count
        }
    }
    render(){
        return(
            <>
            <h3>props Data: {this.state.counter}</h3>
            <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increment</button>
            </>
        )
    }
}

export default  Child;