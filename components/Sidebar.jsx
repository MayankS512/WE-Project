import React, { useState } from 'react'
import Groups from './Groups'
import UserStatus from './UserStatus'
import { PlusIcon } from '@heroicons/react/solid'
import { useCreateServer } from '../hooks/useCreateServer'

const Sidebar = () => {
  const {create, error} =  useCreateServer()
  const [group, setGroup] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    if (name !== '') {
      create(name)
    }
  }
  
  return (
    <div className='flex-col hidden w-full h-full overflow-auto bg-neutral-300 md:flex dark:bg-zinc-800'>
      <UserStatus />
      <Groups />
      <div onClick={() => setGroup(true)} className="flex flex-col items-center justify-center w-full py-2 mt-2 hover:bg-zinc-600 bg-zinc-700">
        {group && 
        <form className='w-full' onSubmit={handleSubmit}>
          <input type="text" placeholder='Group Name' className='w-full p-2 pt-0 bg-transparent outline-none placeholder:text-zinc-300' value={name} onChange={(e) => setName(e.target.value)}/>
        </form>}
        <PlusIcon className="relative z-10 w-7 h-7"/>
      </div>
    </div>
  )
}

export default Sidebar