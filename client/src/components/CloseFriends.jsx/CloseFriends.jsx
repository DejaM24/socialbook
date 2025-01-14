import React from 'react';
import './closeFriends.css';

export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={user.profilePicture} alt=""></img>
    <span className="sidebarFriendName">{user.username}</span>
</li>
  )
}
