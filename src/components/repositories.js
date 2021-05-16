import React,{useState,useContext,useEffect} from 'react'
import "../components/repositories.css"
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import {reposlist} from "../components/tabs"
import { Link } from 'react-router-dom';
import { useParams } from "react-router";

export default function Repositories() {
    const { userName } = useParams();

    const colors = {
        Python:"#3572a5",
        JavaScript : "#f1e05a",
        PHP:"#3572a5",
        HTML:"#e34c26"
    }
    const [star ,setStar] = useState('Star')
    
    const repositories = useContext(reposlist)
    const [search , setSearch] = useState('')
    var repolist = repositories
    var names = repolist.filter((item) => item.name.toLowerCase().search(search.toLowerCase()) !== -1)
    repolist=names
    const handleChange =(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div className = "repositories-home">
             {/* {console.log("search",search)} */}
            {console.log("searchitem",repolist)} 
            <div className = "seach-menu">
                <div className = "search-input">
                    <input type = "search" placeholder = "find a repository..." autocomplete="off" onChange={handleChange} value={search}></input>
                </div>
                <div className = "select-1">
                <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle typebutton" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Type
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                </div>
                <div className = "select-2">
                <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle typebutton" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Language
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                </div>
                <div className = "select-3">
                <div class="dropdown show">
                    <a class="btn btn-outline-secondary dropdown-toggle typebutton" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                </div>
                <div className = "New-repo">
                <button type="button" class="btn btn-success typebutton1"> <PostAddOutlinedIcon /> New</button>
                </div>
            </div>
            <div className = "repositories-list">
                <hr className = "hr"/>
                {repolist.map((items)=>(
                    <>
                        <div className = "repositories-card">
                        <div className = "repo-cardleft">
                            <div className = "repo-name">
                                <Link to ={`/user/${userName}`}>
                                <h4>{items.name}</h4>
                                </Link>
                            </div>
                            <div className = "repo-items">
                                <div className = "repo-language">
                                    <div className = "circle-color" style ={{border: `1px solid ${colors[items.language]?colors[items.language]:"peru"}`,backgroundColor :`${colors[items.language]?colors[items.language]:"peru"}` }}>
    
                                    </div>
                                    <div className = "circle-color1">
                                    <p>{items.language}</p>
                                    </div>
                                
                                </div>
                                <div className = "repo-updatedtime">
                                    Updated on 20/07/2020
                                </div>
                            </div>
                        </div>
                        <div className = "repo-cardright">
                            <button class="btn btn-secondary typebutton" onClick ={()=>setStar("Unstar")} type="submit"><StarBorderOutlinedIcon />{star}</button>
                            
                        </div>
                    </div>
                    <hr/>
                    </>
                ))}
                
            </div>
        </div>
    )
}