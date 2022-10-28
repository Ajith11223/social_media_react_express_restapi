import React from 'react'
import Posts from '../posts/Posts'
import TimePost from '../TimePost/TimePost'
// import PostShare from '../PostShare/PostShare'
import './TimelinePost.css'

const TimelinePost = () => {
  return (
    <div className="TimelinePost">
        time
        {/* <PostShare/> */}
        <TimePost/>
    </div>
  )
}

export default TimelinePost