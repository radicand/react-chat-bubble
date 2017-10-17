import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChatBubble from "./components/ChatBubble";


const image = 'http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg';

class App extends Component {
  state = {
    messages: [
      {
        type: 0,
        image,
        text: "Hello! Good Morning!"
      },
      {
        type: 1,
        image,
        text: "Hello! Good Afternoon!"
      }
    ],
  };

  render() {
    return (
      <ChatBubble
        messages={this.state.messages}
      />
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
