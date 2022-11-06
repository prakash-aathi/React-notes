import { Component } from "react";
class Counter extends Component{
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    increment() {
        this.setState(
            {
                count: this.state.count + 1,
            }
        )
    }
    // binding
    decrement=()=> {
        this.setState(
            {
                count: this.state.count - 1,
            }
        )
    }
    
    render() {
        return (
            <div>
                <h3>Counter: {this.state.count}</h3>
                <button onClick={() => this.increment()}>Increment</button>
                 {/* binding event handling  */}
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;