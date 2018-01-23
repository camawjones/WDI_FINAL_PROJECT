import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import { Link } from 'react-router-dom';

class ChatsIndex extends React.Component {
  state = {
    chats: []
  }

  componentDidMount() {
    Axios
      .get('/api/chats', {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ chats: res.data }, () => {
        console.log(this);
      }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h1 className="register-title">Chats</h1>
        <div className="list-group">
          { this.state.chats && this.state.chats.map(chat =>
            <Link className="list-group-item chat-item flex-column   align-items-start active" key={chat.id} to={`/chats/${chat.id}`}>
              <img className="chat-image" src={chat.users[0].image}/>
              <div className="d-flex w-100 justify-content-between">
                <h4 className="chat-message"><strong>Chat: </strong><i>{chat.users[0].username}</i></h4>
                <div className="chat-message">
                  <p className="lastmessage"><strong>Last Message: </strong><i>{chat.messages.length -1 > 0 && chat.messages[chat.messages.length -1].content}</i></p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default ChatsIndex;
