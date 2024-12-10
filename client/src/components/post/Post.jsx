import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src='/person-1.jpg' alt=''></img>
                <span className='postUsername'>Renee Johnson</span>
                <span className='postDate'>5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert></MoreVert>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey guys! I'm excited to be announcing a new marketing position at BETrue.Inc. Check it out! </span>
            <img className="postImg" src="/post-2.jpg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="heartIcon postIcons" src='/heart.png' alt=''></img>
                <img className="likeIcon postIcons" src='/like.jpg' alt=''></img>
                <span className="postLikeCounter">32 likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
