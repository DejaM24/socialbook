import React from "react";
import "./sidebar.css";
import { RssFeed, Chat, Videocam, Groups, Bookmark, Help, Work, Event, School } from "@mui/icons-material";
import { Users } from "../../dummyData.js";
import CloseFriends from "../CloseFriends.jsx/CloseFriends.jsx";



export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper"></div>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"></RssFeed>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarIcon"></Chat>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <Videocam className="sidebarIcon"></Videocam>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Groups className="sidebarIcon"></Groups>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"></Bookmark>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <Help className="sidebarIcon"></Help>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <Work className="sidebarIcon"></Work>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarIcon"></Event>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarIcon"></School>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"></hr>
            <ul className="sidebarFriendList">
                {Users.map(u => (
                   <CloseFriends key={u.id} user={u}></CloseFriends>
                ))}
            </ul>
        </div>
    )
}