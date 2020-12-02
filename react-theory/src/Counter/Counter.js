import React, { Component } from "react";

export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        // standart variant performance
        // return (
        //     <div>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
        //     </div >
        // )

        // alternativ performance without root div. need identify with key for all array elements
        return (
            [
                <h2 key={'11'}>Counter {this.state.counter}</h2>,
                <button key={'22'} onClick={this.addCounter}>+</button>,
                <button key={'33'} onClick={() => this.setState({ counter: this.state.counter - 1 })}> -</button >

            ]
        )
    }
}
