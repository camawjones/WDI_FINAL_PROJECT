import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Cards, { Card } from 'react-swipe-card';
import Auth from '../lib/Auth';

import '../scss/react-card-swipe.scss';

class UsersIndex extends React.Component {
  state = {
    users: [],
    status: false,
    frienderName: '',
    friendName: '',
    currentUser: {},
    firstName: '',
    lookalike: ''
  };

  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    console.log('You\'re Swiping...', e, deltaX, deltaY, absX, absY, velocity);
  }

  swipingLeft(e, absX) {
    console.log('You\'re Swiping to the Left...', e, absX);
  }

  swiped(e, deltaX, deltaY, isFlick, velocity) {
    console.log('You Swiped...', e, deltaX, deltaY, isFlick, velocity);
  }

  swipedUp(e, deltaY, isFlick) {
    console.log('You Swiped Up...', e, deltaY, isFlick);
  }

  swipedLeft = ({ id }) => {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({ users });

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

  swipedRight = ({ id }) => {
    // make an axios request to friend this user
    // POST /api/users/${id}/friends
    console.log('you swiped right');
    console.log({id});
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({ users });

    Axios
      .post(`/api/users/${id}/friends`, { id }, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        if (res.data.friender.status === 'accepted') {
          this.setState({ status: true});
          return res;
        }
      })
      .catch(err => console.error(err));
  };

  handleClick() {
    this.setState({status: false});

  }

  componentDidMount() {
    // Should move this later...
    const { userId } = Auth.getPayload();

    Axios
      .get(`/api/users/${userId}`)
      .then(res => this.setState({ currentUser: res.data }))
      .catch(err => console.error(err));

    Axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.error(err));

  }

  render() {
    const filteredUsers = this.state.users.filter(user => {
      if (user.sex === 'female' && this.state.currentUser.interestedIn === 'women' && user.id !== this.state.currentUser.id) return user;

      if (user.sex === 'male' && this.state.currentUser.interestedIn === 'men' && user.id !== this.state.currentUser.id) return user;
    });




    return (
      <div>
        <div>
          <div className="page-banner col-md-12">
            {this.state.status && <img src="https://image.ibb.co/kncYaG/hollywood_star.png" alt="" className="fame-star img-fit"/>}
            {this.state.status &&
              <button className="match-but" onClick={this.createChat}>Message them here</button>}
            {this.state.status && <Link to={'/users'}>
              <button className="match-but" onClick={() => this.handleClick()}>Or keep on swiping</button>
            </Link>}
          </div>

          {!this.state.status && <Cards onEnd={() => console.log('done')} className="master-root">
            {filteredUsers && filteredUsers.map(user => {
              return(
                <Card
                  key={user.id}
                  onSwipeLeft={() => this.swipedLeft(user)}
                  onSwipeRight={() => this.swipedRight(user)}
                >
                  <Link to={`/users/${user.id}`}>
                    <img className="img-fit" src={user.image}
                    />
                  </Link>
                  <div className="profile-card">
                    <p className="profile-name"><strong>Name: </strong> {user.firstName}</p>
                    <p className="profile-name"><strong>Lookalike: </strong> {user.lookalike}</p>
                  </div>
                </Card>
              );
            })}
          </Cards>}
        </div>

      </div>
    );
  }
}

export default UsersIndex;
