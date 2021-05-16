import React from 'react'
import '../components/projects.css'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import CheckIcon from '@material-ui/icons/Check';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
export default function Projects() {
    // fetch("https://github.com/users/bertrandmartel/contributions?to=2016-12-31",{
    //     headers :{"Access-Control-Allow-Origin":"*"
    // }
    // }).then((res)=>res.json())
    // .then((res)=>{
    //     console.log("mahimahi",res);
    // })
   
    return (
        <div className = "project-home">
            <div className = "project-menusearch">
                <div className = "search-project">
                    <input type = "search" placeholder = "find a repository..." autocomplete="off"></input>
                </div>
                <div className = "New-repo">
                    <button type="button" class="btn btn-success typebutton"> New repository</button>
                </div>
            </div>
            <div className = "project-box">
                <div className = "project-menu">
                    <div className ="open-projects">
                        <AssessmentOutlinedIcon /> <b>3Open</b>
                    </div>
                    <div className ="closed-projects">
                        <CheckIcon style={{height :"15px"}} /><b>0Closed</b>
                    </div>
                    <div className ="sort-projects">
                    <div class="dropdown show">
                        <a class="btn btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
                <div className = "projects-list">
                    <div className = "left-part">
                        <div className = "project-name">
                            <Link to="">
                                <h4>Kido App</h4>
                            </Link>
                        </div>
                        <div className = "project-name">
                        <AccessTimeIcon style={{height:"13px"}}/><a>Updated on 20/07/2020</a>
                        </div>
                    </div>
                    <div className = "discription">
                        <p>disctiption</p>
                    </div>
                    <div className = "options">
                        <MoreHorizIcon />
                    </div>
                </div>
                <hr />
                <div className = "projects-list">
                    <div className = "left-part">
                        <div className = "project-name">
                            <Link to="">
                                <h4>Kido App</h4>
                            </Link>
                        </div>
                        <div className = "project-name">
                        <AccessTimeIcon style={{height:"13px"}}/><a>Updated on 20/07/2020</a>
                        </div>
                    </div>
                    <div className = "discription">
                        <p>disctiption</p>
                    </div>
                    <div className = "options">
                        <MoreHorizIcon />
                    </div>
                </div>
                <hr />
                <div className = "projects-list">
                    <div className = "left-part">
                        <div className = "project-name">
                            <Link to="">
                                <h4>Kido App</h4>
                            </Link>
                        </div>
                        <div className = "project-name">
                        <AccessTimeIcon style={{height:"13px"}}/><a>Updated on 20/07/2020</a>
                        </div>
                    </div>
                    <div className = "discription">
                        <p>disctiption</p>
                    </div>
                    <div className = "options">
                        <MoreHorizIcon />
                    </div>
                </div>
                <hr />
                <div className = "projects-list">
                    <div className = "left-part">
                        <div className = "project-name">
                            <Link to="">
                                <h4>Kido App</h4>
                            </Link>
                        </div>
                        <div className = "project-name">
                        <AccessTimeIcon style={{height:"13px"}}/><a>Updated on 20/07/2020</a>
                        </div>
                    </div>
                    <div className = "discription">
                        <p>disctiption</p>
                    </div>
                    <div className = "options">
                        <MoreHorizIcon />
                    </div>
                </div>
                
                {/* <hr /> */}
            </div>
            
        </div>
    )
}
