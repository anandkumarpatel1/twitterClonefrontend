import React from 'react'
import './HomeLeft.scss'

const UserCard = () => {
  return (
    <div className="userCard">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Mangekyou_Sharingan_Itachi.svg"
          alt="logo"
        />
        <div>
          <p>name</p>
          <p>@name</p>
        </div>
      </div>
      <button>follow</button>
    </div>
  )
}

export default UserCard
