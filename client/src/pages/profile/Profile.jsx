import React from 'react';
import './profile.css';
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";

export default function Profile() {
    return (
        <div>
            <Topbar></Topbar>
            <div className="profile">
                <Sidebar></Sidebar>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className="profileCoverImg" src="/cover.jpg" alt=''></img>
                        <img className='profileUserImg' src='/person-9.jpg' alt=''></img>
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Eric Benson</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <Rightbar profile></Rightbar>
                    </div>
                </div>
            </div>
        </div>
    )
}
