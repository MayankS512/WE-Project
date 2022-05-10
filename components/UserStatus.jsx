import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const Menu = () => {
  const [active, setActive] = useState(false)
  const { logout } = useLogout()
  return (
    <div className='flex flex-col items-center'>
    <ChevronDownIcon onClick={() => {setActive(!active)}} className='relative z-20 w-8 h-8 p-1 m-1 -mb-1 rounded-full hover:bg-zinc-500' />
    {active && (<div className='flex flex-col items-center'>
      <button className='pt-3' onClick={() => {}}>Settings</button>
      <button className='pt-2' onClick={logout}>Log Out</button>
    </div>)}
    </div>
  )
}

const UserStatus = () => {
  const { user } = useAuthContext()

  return (
    <div className='flex flex-col items-center justify-center p-4 bg-zinc-700'>
      <img src={user.photoURL} className='p-4 rounded-full pointer-events-none select-none w-36' />
      <h2 className='text-2xl font-bold'>{user.displayName}</h2>
      <Menu />
    </div>
  )
}

export default UserStatus