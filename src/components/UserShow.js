import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';


class UserShow extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    Axios.get(`/api/users/${this.props.match.params.id}`)
      .then(console.log(this))
      .then(res => this.setState({user: res.data}))
      .catch(err => console.error(err));
  }

  render() {
    return(
      <div className="profile-page">
        <img className="profile-img" src={this.state.user.image}/>
        <h3 className="profile-card-name">{this.state.user.firstName}</h3>
        <p className="profile-text"><strong>Bio: </strong>{this.state.user.bio}</p>
        <p className="profile-text"><strong><Link to={'/users'}>Back to index</Link></strong></p>
      </div>
    );
  }
}

export default UserShow;
