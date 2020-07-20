import React, { Component } from "react";
import "./styles.css";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" }
];

class AllTogetherExercise2Exercise extends Component {
  /*
   If the user did not type anything, he/she should not be
   allowed to submit.
   */

  state = {
    messages: [],
    messagesEntered: "",
    username: ""
  };

  onItemChange = event => {
    this.setState({
      messagesEntered: event.target.value,
      username: event.target.name
    });
    console.log(this.state.username);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      messages: [
        ...this.state.messages,
        { username: this.state.username, text: this.state.messagesEntered }
      ],
      messagesEntered: ""
    });
  };

  render() {
    console.log(this.state.messages);

    // let buttonDisabledAmy = true
    //    if (this.state.messagesAmy) {buttonDisabledAmy=false}
    let buttonDisabledJohn = false;
    //  if (this.state.messagesJohn) {buttonDisabledJohn=false}

    return (
      <div className="container">
        {users.map((user, id) => (
          <ChatWindow
            key={user.username}
            id={id}
            username={this.state.username}
            messages={this.state.messages}
            messagesEntered={this.state.messagesEntered}
            handleSubmit={this.handleSubmit}
            onItemChange={this.onItemChange}
            users={users}
          />
        ))}
      </div>
    );
  }
}

export default AllTogetherExercise2Exercise;
