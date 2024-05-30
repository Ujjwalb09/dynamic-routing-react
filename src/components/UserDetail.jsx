import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
    const {name} = useParams()
    const navigate = useNavigate()

  return (
    <div className=' 
    mt-10'>
        <h1 className='text-5xl mb-3 text-red-200'>User Detail</h1>
        
        <h1 className='text-3xl'>{name}</h1>

        <button onClick={()=>{
            navigate("/user")
        }} className='box-border text-white flex h-[47.9902px] w-[124.003px] items-center justify-center bg-red-500 font-semibold outline-offset-0 shadow-[rgba(255,255,255,0.2)_0px_1px_0px_0px_inset] text-[14px] leading-[20px] px-[24px] rounded-[8px] whitespace-nowrap mt-3'>Go back</button>
    </div>
  )
}

export default UserDetail