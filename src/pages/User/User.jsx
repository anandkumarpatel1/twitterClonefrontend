import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import ProfileMain from '../../components/ProfileMain/ProfileMain'
import HomeLeft from '../../components/HomeLeft/HomeLeft'

const User = ({follow}) => {

  return (
    <div className="profile">
      <SideBar />
      <ProfileMain />
      <HomeLeft />
    </div>
  )
}

export default User