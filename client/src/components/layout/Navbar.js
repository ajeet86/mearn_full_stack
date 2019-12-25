import React,{Fragment} from 'react';
import {Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import PropTypes from 'prop-types';

 const Navbar = ({auth:{isAuthenticated,loading},logout}) => {
    const authLinks = (
      
        <ul className="navbar-nav ml-auto">
<li><a href="profiles.html">Contractor</a></li>
<li>
          |
          <Link to='/dashboard'><i class="fas fa-user"></i>
            <span class="hide-sm">Dashboard</span></Link>
        </li>
        <li>
          <a  href="#!" onClick={logout} title="Logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="hide-sm">Logout</span></a
          >
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
        <nav className="bg-dark">

          
        <h1>
        <Link to="/"> JOBTheBid</Link>
        </h1>

        <div class="container-fluid m-0">
                <a class="navbar-brand float-left" href="index.html">
                    <h4><img src="img/logo1.ico" class="admin_img" alt="logo" /> ADMIRE ADMIN</h4>
                </a>
                <div class="menu">
                    <span class="toggle-left" id="menu-toggle">
                        <i class="fa fa-bars"></i>
                    </span>
                </div>
                <div class="topnav dropdown-menu-right float-right">

                <div class="btn-group hidden-md-up small_device_search" data-toggle="modal"
                         data-target="#search_modal">
                        <i class="fa fa-search text-primary"></i>
                    </div>
                    <div class="btn-group">
                      </div>
                      <div class="btn-group">
                        </div>
                        <div class="btn-group">
                        {!loading &&(<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
                        <div class="user-settings no-bg">
                            <button type="button" class="btn btn-default no-bg micheal_btn" data-toggle="dropdown">
                                <img src="img/admin.jpg" class="admin_img2 img-thumbnail rounded-circle avatar-img"
                                     alt="avatar" /> <strong>Micheal</strong>
                                <span class="fa fa-sort-down white_bg"></span>
                            </button>
                            <div class="dropdown-menu admire_admin">
                                <a class="dropdown-item title" href="#">
                                    Admire Admin</a>
                                <a class="dropdown-item" href="edit_user.html"><i class="fa fa-cogs"></i>
                                    Account Settings</a>
                                <a class="dropdown-item" href="#">
                                    <i class="fa fa-user"></i>
                                    User Status
                                </a>
                                <a class="dropdown-item" href="mail_inbox.html"><i class="fa fa-envelope"></i>
                                    Inbox</a>

                                <a class="dropdown-item" href="lockscreen.html"><i class="fa fa-lock"></i>
                                    Lock Screen</a>
                                <a class="dropdown-item" href="login2.html"><i class="fa fa-sign-out"></i>
                                    Log Out</a>
                            </div>
                        </div>
                          </div>







                </div>
        </div>
    {/*<p>ajeet {isAuthenticated}</p> */}
    
    
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