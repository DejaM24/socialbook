import React, { useState } from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData.js';

export default function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  function likeHandler() {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=''></img>
                <span className='postUsername'>{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert></MoreVert>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="heartIcon postIcons" src='/heart.png' onClick={likeHandler} alt=''></img>
                <img className="likeIcon postIcons" src='/like.jpg' onClick={likeHandler} alt=''></img>
                <span className="postLikeCounter">{like} likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
