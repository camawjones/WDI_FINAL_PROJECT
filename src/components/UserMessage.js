import React from 'react';
import Axios from 'axios';
import Auth from '../lib/Auth';


class UserMessage extends React.Component {

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

      .catch(err => console.log(err));
  }

  render() {

    return(
      <section>
        <p>yo</p>
        { this.state.chat.messages &&
          <div>
            {this.state.chat.messages.map(message => {
              return (
                <div
                  style={this.state.messageStyle}
                  className={(message.id === this.state.currentUser.id) ? 'currentUserMessage' : 'receiverMessage'} key={message.id}>
                  <p>{message.content}</p>
                </div>
              );
            })}

          </div>
        }
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Don't be shy, say Hey! ;)"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <button>Send</button>

        </form>
      </section>
    );
  }
}

export default UserMessage;
