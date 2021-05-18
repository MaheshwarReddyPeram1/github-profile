import React from 'react'
import logo from '../images/iconmonstr-github-1.svg'
import "../components/header.css"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg">
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon btn-dark bg-dark btn-lg "></span>
                </button>
                <div className = "logo">
                            <img src="https://github.com/fluidicon.png"></img>
                </div>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className = "search">
                        <input type="text" name="search" placeholder="Search or jump to.." autoComplete = "off"></input>
                    </div>
                    <hr className = "har-nav"/>
                    <div className = "Pull-request">
                        <Link to="/user/u" >
                            <h6 className ="hover-color" style ={{textDecoration : "none"}}>Pull request</h6>
                        </Link>
                    </div>
                    <hr className = "har-nav"/>
                    <div className = "issues">
                        <Link to="/user/u">
                            <h6 className ="hover-color">issues</h6>
                        </Link>                
                    </div>
                    <hr className = "har-nav"/>

                    <div className = "Marketplace">
                        <Link to="/user/u">
                            <h6 className ="hover-color">Marketplace</h6>
                        </Link>
                    </div>
                    <hr className = "har-nav"/>
                    <div className = "Explore">
                        <Link to="/user/u">
                            
                            <h6 className ="hover-color">Explore</h6>
                        </Link>
                    
                    </div>
                    <div className = "right-menu">
                        <div className = "Notifications">
                            <Link to="/user/u">
                            <NotificationsNoneIcon style={{ color: "white"}} />
                            </Link>
                        </div>
                        <div className = "drop-down">
                            <AddOutlinedIcon style={{ color: "white"}}/>
                            <ArrowDropDownOutlinedIcon style={{ color: "white"}}/>
                            <div class="dropdown-content">
                            <Link to="/user/u">
                                <p>New repository</p>
                            </Link>
                            <Link to="/user/u">
                                <p>Import repository</p>
                            </Link><Link to="/user/u">
                                <p>New gist</p>
                            </Link><Link to="/user/u">
                                <p>Hello World!</p>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
        
    </nav>
        </div>
    )
}

export default Header;
