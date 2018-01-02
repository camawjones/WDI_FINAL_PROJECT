import React from 'react';
import { Link } from 'react-router-dom';


class Homepage extends React.Component {
  render() {
    return(
      <div>
        <div>
          <div className="home-title">
            <p>Lookalove</p>
          </div>
          <div className="home-star">
            <img className="img-fit" src="https://image.ibb.co/g4inqR/where_the_stars.png"/>
          </div>
          <div className="home-links">
            <Link to="/login">
              <p className="login">Login</p>
            </Link>
            <Link to="/register">
              <p className="register">Register</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
