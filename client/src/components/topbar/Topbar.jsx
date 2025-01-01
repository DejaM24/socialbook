import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";


export default function Topbar() {
    const navigate = useNavigate();

    function navigateProfile() {
        navigate('/profile/:username');
    }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/'>
                <span className="logo">socialbook</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"></Search>
                    <input placeholder="Search here..." className="searchInput"></input>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/profile/:username">
                    <span className="topbarLink logo">Home</span>
                    </Link>
                    <Link to="/">
                    <span className="topbarLink logo">Timeline</span>
                    </Link>
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
                <img src="/person-9.jpg" alt="" className="topbarImg" onClick={() => navigateProfile()}></img>
            </div>

        </div>
    )
}