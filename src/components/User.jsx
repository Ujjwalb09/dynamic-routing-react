import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='
    w-1/2 m-auto mt-10'>
      <h1 className='text-red-200 text-5xl mb-2'>
        User
      </h1>
        
        <div className='flex w-1/2 flex-col mt-3'>
          <NavLink className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/user/John">John</NavLink>
          <NavLink className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/user/Harsh">Harsh</NavLink>
          <NavLink className='hover:bg-red-300 p-3 bg-red-200 text-2xl mb-3' to="/user/Ujjwal">Ujjwal</NavLink>
        </div>

        <hr />

        <Outlet/>
    </div>
  )
}

export default User

