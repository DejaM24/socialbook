import React from 'react';
import "./rightbar.css";
import { Users } from '../../dummyData.js';
import Online from '../online/Online.jsx';

export default function Rightbar({ profile }) {
    function HomeRightBar() {
        return (
            <div>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src='/celebrate.jpg' alt=''></img>
                    <span className="birthdayText"><b>Micah Piccolo</b> and <b>3 other friends</b> have a birthday today!</span>
                </div>
                <img className='rightbarAd' src='/ad.jpg' alt=''></img>
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u}></Online>
                    ))}

                </ul>
            </div>
        )
    }

    function ProfileRightBar() {
        return (
            <div>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York City</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Chicago</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship Status:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/person-1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sara Jeans</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/person-2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sara Jeans</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/person-3.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sara Jeans</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/person-4.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sara Jeans</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/person-5.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sara Jeans</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/person-6.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sara Jeans</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar></ProfileRightBar> : <HomeRightBar></HomeRightBar>}
            </div>
        </div>
    )
}
