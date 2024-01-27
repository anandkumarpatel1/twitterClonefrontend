import React from 'react'
import './Home.scss'
import SideBar from '../../components/SideBar/SideBar'
import HomePost from '../../components/HomePost/HomePost'

const Home = () => {
  return (
    <div className='home'>
        <SideBar />
        <HomePost />
    </div>
  )
}

export default Home