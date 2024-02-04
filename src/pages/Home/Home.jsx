import React from 'react'
import './Home.scss'
import SideBar from '../../components/SideBar/SideBar'
import HomePost from '../../components/HomePost/HomePost'
import HomeLeft from '../../components/HomeLeft/HomeLeft'

const Home = () => {
  return (
    <div className='home'>
        <SideBar />
        <HomePost />
        <HomeLeft />
    </div>
  )
}

export default Home