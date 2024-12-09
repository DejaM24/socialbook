import React from "react";
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import "./home.css"

export default function Home() {
    return (
        <div>
            <Topbar></Topbar>
            <div className="homeContainer">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Rightbar></Rightbar>
            </div>
            
        </div>
    )
}