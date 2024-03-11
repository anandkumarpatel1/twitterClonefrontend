import React from 'react'
import './Home.scss'
import SideBar from '../../components/SideBar/SideBar'
import HomePost from '../../components/HomePost/HomePost'
import HomeLeft from '../../components/HomeLeft/HomeLeft'
import MobileFlotingIcon from '../../components/HomePost/MobileFlotingIcon'

const Home = () => {
  return (
    <div className='home'>
        <SideBar />
        <HomePost />
        <MobileFlotingIcon />
        <HomeLeft />
    </div>
  )
}

export default Home