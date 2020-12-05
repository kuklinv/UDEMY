import React, {Component} from "react";
import Auxilliary from "../hoc/Aux";
import CounterComponent2 from "./CounterComponent2/CounterComponent2";


export default class Counter extends Component {

    state = {
        counter: 0
    }
// usual work of state:
//     addCounter = () => {
//         this.setState({counter: this.state.counter + 1})
//     }

    // most safe method of work with state - because its my be async
    addCounter = () => {
        this.setState((prevState) => {
            return {counter: prevState.counter + 1};
        })
    }

    render() {
        // standard variant performance
        // return (
        //     <div>
        //         <h2>CounterComponent {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
        //     </div >
        // )

        // alternative performance without root div. need identify with key for all array elements
        // return (
        //     [
        //         <h2 key={'11'}>CounterComponent {this.state.counter}</h2>,
        //         <button key={'22'} onClick={this.addCounter}>+</button>,
        //         <button key={'33'} onClick={() => this.setState({ counter: this.state.counter - 1 })}> -</button >
        //
        //     ]
        // )

        // and fragment
        // return (
        //     <React.Fragment>
        //         <h2>CounterComponent {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </React.Fragment>
        // )

        //and using hi order component (hoc) => aux
        return (
            <Auxilliary>
                <div style={{
                    border: '5px solid #ccc',
                    width: 300,
                    margin: '0 auto'
                }}>
                    <h2>Counter {this.state.counter}</h2>
                    <CounterComponent2/>
                    <button onClick={this.addCounter}>+</button>
                    <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
                </div>
            </Auxilliary>
        )
    }
}
