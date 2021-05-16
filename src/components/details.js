import React,{useState,useEffect} from 'react'
import '../components/details.css'
import propic from '../images/IMG_20200614_141717.jpg'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useParams } from "react-router";

export default function Details() {
    const [user, setUser] = useState([])
    const { userName } = useParams();
    const [org , setOrg] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}`)
        .then((response)=>{
            response.json()
            .then((r)=>{
                console.log(r);
                setUser(r)
            })
        })
        fetch(`https://api.github.com/users/${userName}/orgs`)
        .then((response)=>{
            response.json()
            .then((r)=>{
                console.log(r);
                setOrg(r)
            })
        })
    }, [])
    return (
        <div className = "profile-container">
            {/* <hr style={{marginTop :"5px"}}/> */}
            {console.log("mahi",user.avatar_url)}
            <div className="profile-pic">
                <img src={user.avatar_url}></img>
            </div>
            <div className="user-name">
                <div>
                <h2>{user.name}</h2>

                </div>
                <div>
                <p>{user.login}</p>

                </div>
                <div>
                <p>{user.bio}</p>
                </div>
            </div>
            <div className = "user-follow">
                <div className = "follow-button">
                <button type="button" class="btn btn-outline-secondary typebutton">follow</button>
                </div>
                <div className = "sponsors-button">
                    <button type="button" class="btn btn-outline-secondary typebutton"><FavoriteBorderOutlinedIcon style={{color:"red"}}/>Sponsor</button>
                </div>
                <div className = "three-dots">
                    <MoreHorizIcon />
                </div>
            </div>
            <div className = "user-connections">
                <snap><PeopleOutlineIcon style={{height : "15px"}}/> <b>{user.followers}</b>followers . <b>{user.following}</b>following . <StarBorderIcon style={{height : "15px"}}/> <b>530</b></snap>
            </div>
            <div className = "user-details">
                <div className = "company">
                <BusinessIcon style={{height :"15px",marginTop :"5px"}}/> {user.company}
                </div>
                <div className = "loc">
                <LocationOnOutlinedIcon style={{height :"15px",marginTop :"5px"}}/>{user.location}
                </div>
                <div className = "email">
                
                    <MailOutlineOutlinedIcon style={{height :"15px"}}/>{user.email}
                </div>
                <div className = "blog">
                    <div>
                    <LinkOutlinedIcon style={{height :"15px",marginTop :"5px"}}/>
                    </div>
                    <div>
                    {user.blog}
                    </div>
                </div>
                <hr/>
            </div>
            <div className = "user-highlights">
                <h5>Highlights</h5>
                <hr/>
            </div>
            <div className = "user-organization">
                <h5>Organizations</h5>
                {org?org.map((item)=>(
                    <div>
                        <div className = "avt">
                            <img src= {item.avatar_url}></img>
                        </div>
                    </div>
                )):""}
                <hr/>
            </div>
            <div className = "user-Sponsors">
                <h5>
                    Sponsors
                </h5>
                <hr/>
            </div>
        </div>
    )
}
