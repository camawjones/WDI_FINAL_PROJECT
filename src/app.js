import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap-css-only';
import 'react-bootstrap';
import './scss/style.scss';

import UsersIndex from './components/UsersIndex';
import UserShow from './components/UserShow';
import Login    from './components/auth/Login';
import Register from './components/auth/Register';
import UserProfileEdit from './components/UserProfileEdit';
import Homepage from './components/Homepage';
import Sidebar from './components/utility/Sidebar';
import ChatsIndex from './components/chats/ChatsIndex';
import ChatsShow from './components/chats/ChatsShow';
import Matches from './components/Matches';

class App extends React.Component {
  state = {
    checkWidth: '0px',
    users: []
  };

  toggleStyle = () => {
    if (this.state.checkWidth === '0px') {
      this.setState({checkWidth: '250px'});
    } else {
      this.setState({checkWidth: '0px'});
    }
  }

  render() {
    return (
      <BrowserRouter>

        <main className="main-div">
          <Sidebar
            toggleStyle={this.toggleStyle}
            checkWidth={this.state.checkWidth} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/matches" component={Matches} />
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/users" component={UsersIndex} />
          <Route exact path="/chats" component={ChatsIndex} />
          <Route path="/chats/:id" component={ChatsShow} />
          <Route exact path="/users/:id/edit" component={UserProfileEdit} />
          <Route exact path="/users/:id" component={UserShow} />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
