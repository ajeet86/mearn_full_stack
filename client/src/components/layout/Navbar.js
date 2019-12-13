import React,{Fragment} from 'react';
import {Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import PropTypes from 'prop-types';

 const Navbar = ({auth:{isAuthenticated,loading},logout}) => {
    const authLinks = (
        <ul className="navbar-nav ml-auto">
         
          <li className="nav-item">
            <a
              href="#!" onClick={logout}
              className="nav-link"
            >
              
              Logout
            </a>
          </li>
        </ul>
      );
  
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
  




    return (
        <nav className="navbar bg-dark">
        <h1>
        <Link to="/"><i className="fas fa-code"></i> JOBTheBid</Link>
        </h1>
    {!loading &&(<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
  }
const mapStateToProps= state =>({
    auth:state.auth
  })
export default connect(mapStateToProps,{logout})(Navbar);