import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useCreateServer } from '../hooks/useCreateServer'

const Menu = () => {
  const [active, setActive] = useState(false)
  const { logout } = useLogout()
  const { join } = useCreateServer()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    if (name !== '') {
      join(name)
    }
  }
  
  return (
    <div className='flex flex-col items-center w-full'>
    <ChevronDownIcon onClick={() => {setActive(!active)}} className='relative z-20 w-8 h-8 p-1 m-1 -mb-1 rounded-full hover:bg-zinc-500' />
    {active && (<div className='flex flex-col items-center w-full mt-2'>
      <form className='flex flex-col justify-center w-full pt-2 items-middle' onSubmit={handleSubmit}>
        <input className='w-full p-2 rounded-md outline-none bg-zinc-600 placeholder:text-zinc-400' placeholder='Server ID' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button className='mt-2 ml-2' onClick={handleSubmit}>Join Server</button>
      </form>
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
      <h2 className='text-2xl font-bold select-none'>{user.displayName}</h2>
      <Menu />
    </div>
  )
}

export default UserStatus