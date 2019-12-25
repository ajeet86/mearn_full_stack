import React, { Fragment, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profile';
import { constants  } from 'crypto';



const Dashboard =({getCurrentProfile, auth, profile}) =>{


    const [count, setCount] = useState(0);
    const [name, setName] = useState('Flavio');

     useEffect(() => {
        getCurrentProfile();
        console.log(`Hi ${name} you clicked ${count} times`);
        
     },[]);

    

const alert1 = e =>{
    alert(e)
       if(count==e){
        setCount(0);
       }else{
        setCount(e);
       }
   

  }



    return (
    
        <div>
          <div id="top">
      
          <p>
        Hi {name} you clicked {count} times
      </p>
      <button id='ajeet'  onClick={e=>alert1(e.target.id)}>Click me</button>
      <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
        Change name
      </button>
       
    </div>
  
    <div class="wrapper">
        <div id="left">
            <div class="menu_scroll">
                <div class="left_media">
                    <div class="media user-media">
                        <div class="user-media-toggleHover">
                            <span class="fa fa-user"></span>
                        </div>
                        <div class="user-wrapper">
                            <a class="user-link" href="#">
                                <img class="media-object img-thumbnail user-img rounded-circle admin_img3" alt="User Picture"
                                     src="img/admin.jpg" />
                                <p class="user-info menu_hide">Welcome Micheal</p>
                            </a>
                        </div>
                    </div>
                    <hr/>
                </div>
                <ul id="menu">
                    <li>
                        <a href="#">
                            <i class="fa fa-home"></i>
                            <span class="link-title menu_hide">&nbsp;Dashboard 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-tachometer"></i>
                            <span class="link-title menu_hide">&nbsp;Dashboard 2

                            </span>
                        </a>
                    </li>
                    <li  class={"dropdown_menu " + (count==1 ? 'active' : '')}>
                        <Link to="#" id='1' onClick={e=>alert1(e.target.id)} >
                            <i id='1' onClick={e=>alert1(e.target.id)} class="fa fa-anchor"></i>
                            <span id='1' onClick={e=>alert1(e.target.id)} class="link-title menu_hide">&nbsp; Components</span>
                            <span  id='1' onClick={e=>alert1(e.target.id)} class="fa arrow menu_hide"></span>
                        </Link>
                        <ul class={"sidebarbottom collapse  " + (count==1 ? 'show' : '')}>
                            <li>
                                <a href="#">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; General Components
                                </a>
                            </li>
                            <li>
                                <a href="cards.html">
                                    <i class="fa fa-angle-right"></i>
                                    <span class="link-title">&nbsp;Cards</span>
                                </a>
                            </li>
                            <li>
                                <a href="transitions.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Transitions
                                </a>
                            </li>
                            <li class="active">
                                <a href="buttons.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Buttons
                                </a>
                            </li>
                            <li>
                                <a href="icons.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Icons
                                </a>
                            </li>
                            <li>
                                <a href="tooltips.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Tooltips
                                </a>
                            </li>
                            <li>
                                <a href="animations.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Animations
                                </a>
                            </li>

                            <li>
                                <a href="sliders.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Sliders
                                </a>
                            </li>
                            <li>
                                <a href="notifications.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Notifications
                                </a>
                            </li>
                            

                            
                            
                           
                        </ul>
                    </li>
                    <li  class={"dropdown_menu " + (count ==2 ? 'active' : '')}>
                        <Link to="#" id='2'  onClick={e=>alert1(e.target.id)} >
                            <i id='2'  onClick={e=>alert1(e.target.id)} class="fa fa-th-large"></i>
                            <span id='2'  onClick={e=>alert1(e.target.id)} class="link-title menu_hide">&nbsp; Widgets</span>
                            <span  id='2'  onClick={e=>alert1(e.target.id)} class="fa arrow menu_hide"></span>
                        </Link>
                        <ul class={"sidebarbottom collapse  " + (count==2 ? 'show' : '')}>
                            <li>
                                <a href="widgets1.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Widgets 1
                                </a>
                            </li>
                            <li>
                                <a href="widgets2.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Widgets 2
                                </a>
                            </li>
                            
                        </ul>
                    </li>
                    <li  class={"dropdown_menu " + (count ==3 ? 'active' : '')}>
                        <Link to="#" id='3'onClick={e=>alert1(e.target.id)} >
                            <i  id='3'onClick={e=>alert1(e.target.id)} class="fa fa-pencil"></i>
                            <span  id='3'onClick={e=>alert1(e.target.id)} class="link-title menu_hide">&nbsp; Forms</span>
                            <span   id='3'onClick={e=>alert1(e.target.id)} class="fa arrow menu_hide"></span>
                        </Link>
                        <ul class={"sidebarbottom collapse  " + (count==3 ? 'show' : '')}>
                            <li>
                                <a href="form_elements.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Form Elements
                                </a>
                            </li>
                            <li>
                                <a href="form_layouts.html">
                                    <i class="fa fa-angle-right"></i>
                                    &nbsp; Form Layouts
                                </a>
                            </li>
                           

                        </ul>
                    </li>
                   
                   
                    
                   
                   
                </ul>
               
            </div>
        </div>

        <div id="content" class="bg-container">
           <header class="head">
               <div class="main-bar">
                  <div class="row no-gutters">
                      <div class="col-lg-6 col-md-4 col-sm-4">
                          <h4 class="nav_top_align">
                              <i class="fa fa-anchor"></i>
                              Buttons
                          </h4>
                      </div>
                      <div class="col-lg-6 col-md-8 col-sm-8">
                          <ol class="breadcrumb float-right nav_breadcrumb_top_align">
                              <li class="breadcrumb-item">
                                  <a href="index1.html">
                                      <i class="fa fa-home" data-pack="default" data-tags=""></i>
                                      Dashboard
                                  </a>
                              </li>
                              <li class="breadcrumb-item">
                                  <a href="#">Components</a>
                              </li>
                              <li class="breadcrumb-item active">Buttons</li>
                          </ol>
                      </div>
                  </div>
               </div>
           </header>
           <div class="outer buttons_page">
               <div class="inner bg-container">
                   <div class="card">
                       <div class="card-block">
                           <div class="row">
                               <div class="col-lg-12">
                                   <div class="row">
                                       <div class="col-12 col-lg-6 m-t-35 buttons_center">
                                           <h5>Basic Buttons</h5>
                                           <div class="row">
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-secondary">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-primary">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-success">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-warning">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-danger">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-info">Button</button>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="col-12 col-lg-6 m-t-35 buttons_center">
                                           <h5>Disabled Buttons</h5>
                                           <div class="row disabled_buttons">
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-secondary disabled">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-primary disabled">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-success disabled">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-info disabled">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-warning disabled">Button</button>
                                               </div>
                                               <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button class="btn btn-danger disabled">Button</button>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div class="col-lg-12">
                                   <div class="row">
                                       <div class="col-12 col-lg-6">
                                           <div class="button_section_align">
                                               <h5>Outline Buttons</h5>
                                               <div class="row">
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-outline-secondary">Button</button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-outline-primary">Button</button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-outline-success">Button</button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-outline-info">Button</button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-outline-warning">Button</button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-outline-danger">Button</button>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="col-12 col-lg-6">
                                           <div class=" button_section_align">
                                               <h5>Rounded Buttons</h5>
                                               <div class="row">
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-secondary  button-rounded">Button
                                                       </button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-primary button-rounded">Button
                                                       </button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-success  button-rounded">Button
                                                       </button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-warning button-rounded">Button
                                                       </button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-danger button-rounded">Button
                                                       </button>
                                                   </div>
                                                   <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                       <button class="btn btn-info button-rounded">Button</button>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                  
                  
               </div>
              
           </div>
         
       </div>
        
   </div>
        </div>
      )
}
          
        

        
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);