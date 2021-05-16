import React,{useState,useEffect} from 'react'
import "../components/tabs.css"
import Overview from "../components/overview"
import Repositories from "../components/repositories"
import Packages from "../components/packages"
import Projects from  "../components/projects"
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import { Link } from 'react-router-dom'
import { useParams } from "react-router";

export const reposlist = React.createContext()
export default function Tabs(){
    var [d, setD] = useState("tab1")
    const [repo, setrepo] = useState("Overview")
    const [repositories , setRepositories] = useState([])
    const { userName } = useParams();
    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log("hellomahireddy");
            setRepositories(res)
        })
        const a = document.getElementById("tab1")
        a.style.color ="black"
        a.style.fontWeight = "800"
        a.style.borderBottom ="3px solid #f9826c"
    }, [])
    const handle = (r1,id) =>{
        console.log(d);
        const b = document.getElementById(d)
        b.style.color= "#6a737d";
        b.style.textDecoration="none";
        b.style.borderBottom =""
        setD(id)
        setrepo(r1)
        const a = document.getElementById(id)
        a.style.color ="black"
        a.style.fontWeight = "800"
        a.style.borderBottom ="3px solid #f9826c"
    }
    return (
        <div className = "tabs-home">
            <div className ="top-tabs">
            <Link to={`/user/${userName}`}>
                <div className = "overview" id ="tab1">
                    <ImportContactsOutlinedIcon /><a onClick={()=>{handle("Overview","tab1")}} style ={{textDecoration :"none"}}> Overview</a>
                </div>
                </Link>
                <Link to={`/user/${userName}`}>
                <div className = "overview" id ="tab2">
                    <div >
                    <PhotoAlbumOutlinedIcon style ={{height :"20px"}}/>

                    </div>
                    <div style ={{marginTop:"-7px"}}>
                    <a onClick={()=>{handle("Repositories","tab2")}}>Repositories </a>
                    </div>
                    
                    <div style={{border:"3px solid rgb(209 213 218 / 50%)",borderRadius :"50%",height:"20px" ,color:"black",backgroundColor:"rgb(209 213 218 / 50%)",marginTop:"-10px"}}>
                    {repositories.length}
                    </div>
                </div>
                </Link>
            <Link to={`/user/${userName}`}>
                <div className = "overview" id ="tab3">
                    <AssessmentOutlinedIcon /><a onClick={()=>{handle("Projects","tab3")}}>projects</a>
                </div>
                </Link>
            <Link to={`/user/${userName}`}>
                <div className = "overview" id ="tab4">
                    <VerticalSplitIcon /><a onClick={()=>{handle("Packages","tab4")}}>packages</a>
                </div>
                </Link>
            </div>
            {/* <hr className ="tab-line"/> */}
           <div className = "content">
               <reposlist.Provider value = {repositories}>
               {repo == "Overview"? <Overview />:repo == "Repositories"?<Repositories />:repo == "Projects"?<Projects />:<Packages/>}
               </reposlist.Provider>
           </div>
        </div>
    )
}
