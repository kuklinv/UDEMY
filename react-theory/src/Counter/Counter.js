import React, {Component} from "react";
import Auxilliary from "../hoc/Aux";

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
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
        //     </div >
        // )

        // alternative performance without root div. need identify with key for all array elements
        // return (
        //     [
        //         <h2 key={'11'}>Counter {this.state.counter}</h2>,
        //         <button key={'22'} onClick={this.addCounter}>+</button>,
        //         <button key={'33'} onClick={() => this.setState({ counter: this.state.counter - 1 })}> -</button >
        //
        //     ]
        // )

        // and fragment
        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </React.Fragment>
        // )

        //and using hi order component (hoc) => aux
        return (
            <Auxilliary>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxilliary>
        )
    }
}
