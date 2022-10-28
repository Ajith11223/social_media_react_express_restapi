import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
// import PostSide from '../../components/postSide/PostSide'
import './Profile.css'
import RightSide from '../../components/RightSide/RightSide'
import TimelinePost from '../../components/TimelinePost/TimelinePost'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard location = 'profilePage'/>
            {/* <PostSide/> */}
            <TimelinePost/>

        </div>
        <RightSide/>
    </div>
  )
}

export default Profile