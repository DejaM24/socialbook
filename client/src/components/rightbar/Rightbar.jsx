import React from 'react';
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
            <img className='birthdayImg' src='/celebrate.jpg' alt=''></img>
            <span className="birthdayText"><b>Ricardo Hernandez</b> and <b>3 other friends</b> have a birthday today!</span>
        </div>
        <img className='rightbarAd' src='/ad.jpg' alt=''></img>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList"></ul>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src='/person-2.jpg' alt=''></img>
                <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>Micah Piccolo</span>
        </li>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src='/person-2.jpg' alt=''></img>
                <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>Micah Piccolo</span>
        </li>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src='/person-2.jpg' alt=''></img>
                <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>Micah Piccolo</span>
        </li>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src='/person-2.jpg' alt=''></img>
                <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>Micah Piccolo</span>
        </li>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src='/person-2.jpg' alt=''></img>
                <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>Micah Piccolo</span>
        </li>
        
      </div>
    </div>
  )
}
