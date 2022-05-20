import React from 'react'
import UserStatus from './UserStatus'

const Sidebar = () => {
  return (
    <div className='hidden w-full h-full overflow-auto bg-neutral-300 md:block dark:bg-zinc-800'>
      <UserStatus />
      
    </div>
  )
}

export default Sidebar