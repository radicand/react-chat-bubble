import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ChatBubble.css';

class ChatBubble extends Component {

  getConversations(messages){
    if(messages == undefined){
      return;
    }

    const listItems = messages.map((message, index) => {
      let bubbleClass = 'me';
      let bubbleDirection = '';

      if(message.type === 0){
        bubbleClass = 'you';
        bubbleDirection = "bubble-direction-reverse";
      }
      return (
              <div className={`bubble-container ${bubbleDirection}`} key={index}>
                <img className={`img-circle`} src={message.image} />
                <div className={`bubble ${bubbleClass}`}>{message.text}</div>
              </div>
          );
    });
    return listItems;
  }

  render() {
    const {props: {messages}} = this;
    const chatList = this.getConversations(messages);

    return (
      <div className="chats">
        {chatList}
      </div>
    );
  }
}

ChatBubble.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ChatBubble;
