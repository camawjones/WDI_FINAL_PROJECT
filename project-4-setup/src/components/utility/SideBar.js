import React                from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import { withRouter } from 'react-router-dom';



const Sidebar = ({ history, checkWidth, toggleStyle }) => {
  const styles = {
    width: checkWidth
  };

  function logout(e) {
    e.preventDefault();
    Auth.removeToken();
    history.push('/');
  }
  //need to work out how to get z index written in React
  //need to work out how to split the two up into className and functional
  //need to write handleclick to change width of sidebar
  //enter link to matches
  return(
    <div>
      {Auth.isAuthenticated() &&  <div>
        <div className="nav-style">
          <div className="burger-menu" onClick={() => toggleStyle()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <Link to="/chats"><div className="chat-heart"></div></Link>
        </div>
      </div>}
      {Auth.isAuthenticated() &&
      <div>
        <div style={styles} id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={() => toggleStyle()}
          >x</a>
          {Auth.isAuthenticated() && <Link to="/users/:id/edit" className="standard-button nav-link" onClick={() => toggleStyle()}>Profile Edit</Link>}
          {' '}
          {Auth.isAuthenticated() && <Link to="/chats" className="standard-button nav-link" onClick={() => toggleStyle()}>Messages</Link>}
          {' '}
          {Auth.isAuthenticated() && <Link to="/users" onClick={() => toggleStyle()} className="standard-button nav-link">Lookaloves</Link>}
          {' '}
          {Auth.isAuthenticated() && <Link to="/matches" className="standard-button nav-link" onClick={() => toggleStyle()}>Matches</Link>}
          {' '}
          {Auth.isAuthenticated() && <a href="#" className="standard-button nav-link" onClick={ logout }>Logout</a>}
          {' '}
        </div>
      </div>}
    </div>

  );
};

export default withRouter(Sidebar);
