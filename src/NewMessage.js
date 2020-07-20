import React, { Component } from "react";
//const users = [{ username: "Amy" }, { username: "John" }];

class NewMessage extends Component {
  render() {
    let buttonDisabled = true;
    let displaymessage;

    //  if (this.props.messagesEntered) {buttonDisabled=false}
    if (this.props.users[this.props.id].username == this.props.username) {
      displaymessage = this.props.messagesEntered;
      if (this.props.messagesEntered) {
        buttonDisabled = false;
      }
    } else {
      displaymessage = "";
    }
    //console.log(this.props.username);
    // console.log("u2", users[this.props.id].username);
    // console.log("message", this.props.messagesEntered);
    return (
      <div>
        <form className="input-group" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name={this.props.users[this.props.id].username}
            className="form-control"
            placeholder="Enter your message..."
            value={displaymessage}
            onChange={this.props.onItemChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={buttonDisabled}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewMessage;
