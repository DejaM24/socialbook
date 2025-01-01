import React from 'react';
import "./feed.css";
import Share from '../share/Share.jsx';
import Post from '../post/Post.jsx';
import { Posts } from "../../dummyData.js";

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share></Share>
        {Posts.map((p) => (
          <Post key={p.id} post={p}></Post>
        ))}
      </div>
    </div>
  )
}
