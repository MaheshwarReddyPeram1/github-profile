import React,{useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../components/overview.css"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {reposlist} from "../components/tabs"
import Repositories from './repositories';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import getContributions from "../components/help"
import { useParams } from "react-router";
import Chart from 'react-apexcharts'
export default function Overview() {
    const [contributions, setcontributions] = useState([])
    const [contribdata, setcontribData] = useState([])

    const colors = {
        Python:"#3572a5",
        JavaScript : "#f1e05a",
        PHP:"#3572a5",
        HTML:"#e34c26"
    }
    useEffect(() => {
        amm()
    }, [])
    const { userName } = useParams();

    const amm = async ()=>{
        const data = await getContributions('ghp_Z4sSdv48UrTJaxaSqYMG5Vw2aGhXD44Aaf', userName)
        console.log("helloperam",data)
        setcontributions(data.data.user.contributionsCollection.contributionCalendar.totalContributions)
        
    }
    var repositories = useContext(reposlist)
    repositories.sort((item,item1)=>{
        if(item.stargazers_count > item1.stargazers_count){
            return -1
        }
        if(item.stargazers_count < item1.stargazers_count){
            return 1
        }
    })
    repositories = repositories.slice(0,6)
    console.log("repos",repositories);
    const fork= (url)=>{
            fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
              document.getElementById("myfork").innerHTML = res.length;
                
            })
    }
    var options = {
        series: [{
        name: 'mon',
        data: [["jan",2],["Feb",2],["mar",3],["apr",2],["may",5],["june",2],["jul",8],["aug",2],["sep",0],["oct",5],["nov",2],["dec",10]]
      },
      {
        name: '',
        data: [["jan",2],["Feb",2],["mar",3],["apr",2],["may",5],["june",2],["jul",8],["aug",2],["sep",2],["oct",5],["nov",2],["dec",10]]
        
      },
      {
        name: 'web',
        data: [["jan",2],["Feb",2],["mar",3],["apr",2],["may",5],["june",2],["jul",8],["aug",2],["sep",0],["oct",5],["nov",2],["dec",10]]
      },
      {
        name: '',
        data: [["jan",2],["Feb",2],["mar",3],["apr",2],["may",5],["june",2],["jul",8],["aug",2],["sep",5],["oct",5],["nov",2],["dec",10]]
      },
      {
        name: 'fri',
        data: [["jan",2],["Feb",2],["mar",3],["apr",2],["may",5],["june",2],["jul",8],["aug",2],["sep",0],["oct",5],["nov",2],["dec",10]]
      },
      {
        name: '',
        data: [["jan",2],["Feb",2],["mar",3],["apr",2],["may",5],["june",2],["jul",8],["aug",2],["sep",0],["oct",5],["nov",2],["dec",10]]
      },
      {
        name: 'sun',
        data: [["jan",2],["Feb",2],["mar",3],["apr",2],["may",5],["june",2],["jul",8],["aug",2],["sep",0],["oct",5],["nov",2],["dec",10]]
      },
      
      ],
        chart: {
        height: 100,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#28a745"],
      title: {
        text: 'Dummydata becuase github throughing error'
      },
      };

//    var state = {
//     options: {
//       chart: {
//         id: "basic-bar"
//       },
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
//       }
//     },
//     series: [
//       {
//         name: "series-1",
//         data: [30, 40, 45, 50, 49, 60, 70, 91]
//       }
//     ]
//   };
    

    //   var chart = new ApexCharts(document.querySelector("#myDiv"), options);
    //   chart.render();


    return (
        <div className = "home-repos">
            <div className = "tags">
                <div class = "popular">
                    <p>Popular repositories</p>
                </div>
                <div className = "customize">
                    <p>customize yout pins</p>
                </div>
            </div>
            <div className = "repos">
                {repositories.map((item)=>(
                    <div className = "card">
                    <div className = "card-content">
                        <div className = "projectname">
                            <Link to="user/:username">
                                <h5>{item.name}</h5>
                            </Link>
                        </div>
                        <div className ="project-tag">
                            <p>{item.description}</p>
                        </div>
                        <div className ="project-language">
                            <div className = "circle-colorlang" style ={{border: `1px solid ${colors[item.language]?colors[item.language]:"peru"}`,backgroundColor :`${colors[item.language]?colors[item.language]:"peru"}` }}>
                        </div>
                            <div className = "lan-name">
                                <p>{item.language}</p>
                            </div>
                            <div className = "stars">
                                <StarBorderIcon style={{height:"15px"}}/><b>{item.stargazers_count}</b>
                            </div>
                            <div className = "forks">
                            <FlashOnIcon style = {{height : "15px"}}/><b id="myfork">{()=>fork(item.forks_url)}</b>
                            </div>
                        </div>
                    </div>
                </div>
                ))} 
                <div className ="heatmap">
                    <div className ="total-con">
                        <p>{contributions} contributions in the last year</p>
                    </div>
                    <img src={`https://ghchart.rshah.org/${userName}`} alt={`${userName} Github chart`} />


                    <div className="myDiv" style={{marginTop :"100px"}}>
                    <Chart
                        options={options}
                        series={options.series}
                        type="heatmap"
                        width="500"
                        height= "200"
                        color = "#28a745"
                    />
                    </div>

                </div>

            </div>
        </div>
    )
}
