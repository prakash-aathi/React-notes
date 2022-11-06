import { Component } from "react";


class Message extends Component {
    render() {
        return (
            <h2>
                {this.props.children}
            {this.props.msg}
        </h2>
        )
    }
}

export default Message;