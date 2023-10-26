import React, { Component } from "react";
import Child from "./Counter2";

class Parent extends Component{
    constructor(){
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <>
            <Child value= {this.state.count}/>
            </>
        )
    }
}

export default Parent;