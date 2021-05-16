import React from 'react'
import Details from "../components/details";
import Tabs from "../components/tabs"
import "../components/home.css"
export default function Home() {
    return (
        <div className = "home">
            <div className = "home-left">
                <Details />
            </div>
            <div className = "home-right">
                <Tabs/>
            </div>
            <hr className = "line-tabs"/>
        </div>
    )
}
