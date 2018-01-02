import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';


class ChatsShow extends React.Component {

  state = {
    chat: {},
    message: '',
    currentUser: {},
    messageStyle: {}
  }


  componentDidMount() {




    const { userId } = Auth.getPayload();



    Axios
      .get(`/api/users/${userId}`)
      .then(res => this.setState({ currentUser: res.data }, () => {
        console.log(this);
      }))
      .catch(err => console.error(err));
    console.log(Auth.getToken());

    Axios
      .get(`/api/chats/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(console.log(this))
      .then(res => this.setState({ chat: res.data }, () => {
        console.log(this.state);
      }))
      .catch(err => console.error(err));
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ message: value });
  }


  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/chats/${this.props.match.params.id}/messages`, {
        content: this.state.message
      }, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        const chat = Object.assign({}, this.state.chats, { messages: this.state.chat.messages.concat(res.data) });
        this.setState({ chat, message: '' }, () => {
          return res;
        });
      })
      // .then(this.state.chat.messages.map(message => {
      //   message.sender === this.state.currentUser.id ?
      //     this.setState({messageStyle: receiverMessage}, () => {
      //       console.log(this.state.messageStyle);
      //     }) : this.setState({messageStyle: currentUserMessage}, () => {
      //       console.log(this.state.messageStyle);
      //     });

      .catch(err => console.log(err));
  }

  render() {

    return(
      <section>
        { this.state.chat.messages &&
          <div className="chat-section">
            {this.state.chat.messages.map(message => {
              return (
                <div key={message.id} ><p className={(message.sender === this.state.currentUser.id ? 'message-bubble-right' : 'message-bubble-left')}>{message.content}</p></div>
              );
            })}
          </div>
        }
        <form className="chat-form" onSubmit={this.handleSubmit}>
          <input
            className="chat-input"
            type="text"
            name="message"
            placeholder="Don't be shy, say Hi! ;)"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <button className="chat-button">Send</button>

        </form>
      </section>
    );
  }
}

export default ChatsShow;
