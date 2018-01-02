import React from 'react';
import Axios from 'axios';
import Auth from '../lib/Auth';
import { Link } from 'react-router-dom';

class Matches extends React.Component {

  state = {
    users: [],
    status: false,
    frienderName: '',
    friendName: '',
    id: '',
    currentUser: null

  };

  componentDidMount() {


    // Should move this later...
    const { userId } = Auth.getPayload();

    Axios
      .get(`/api/users/${userId}`)
      .then(res => this.setState({ currentUser: res.data }))
      .catch(err => console.error(err));

  }

  checkCurrentUser = () => {
    this.state.currentUser.matches.map(match => {
      console.log(match.firstName);
    });

  }

  createChat = (e) => {
    e.preventDefault();
    console.log(this.state.users);
    Axios
      .post(`/api/users/${this.state.currentUser.id}/chats`, {}, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then((res) => {
        return this.props.history.push(`/chats/${res.data.id}/messages`);
      })
      .catch(() => this.props.history.push('/chats'));
  }

  render() {

    if (!this.state.currentUser) return null;
    return(

      <div className="list-group">
        <h3 className="register-title">Matches</h3>
        { this.state.currentUser.matches.map(match =>
          <div className="list-group-item flex-column   align-items-start active" key={match.id}>
            <p className="chat-message"><strong> </strong><i>{match.firstName}</i></p>
            <img className="match-img" src={match.image}/>
            <div className="d-flex w-100 justify-content-between">
              <h4 onClick={this.createChat}>Message them here
              </h4>
            </div>
          </div>

        )}
      </div>

    );
  }
}


export default Matches;
