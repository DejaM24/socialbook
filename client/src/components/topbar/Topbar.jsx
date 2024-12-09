import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">socialbook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"></Search>
                    <input placeholder="Search here..." className="searchInput"></input>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcon">
                    <div className="topbarIconItem">
                        <Person></Person>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat></Chat>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications></Notifications>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/person-9.jpg" alt="" className="topbarImg"></img>
            </div>

        </div>
    )
}