import { Component } from "react";

class Destruct extends Component {
    render() {
        const { name,age } = this.props;
        return (
            <h2>hey your name is {name} and you are { age } years old</h2>
        )
    }
}

export default Destruct;