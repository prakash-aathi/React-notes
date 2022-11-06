import { Component } from "react";

class ClassEventHandler extends Component {
    handleClick() { alert("hey clicked") }; 

    render() {
        return (
            <div>
                <h2>Class event handler This </h2>
                <button onClick={this.handleClick}>Click here </button>
            </div>
        )
    }
}

export default ClassEventHandler;