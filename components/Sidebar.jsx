import { useState } from 'react'
import Groups from './Groups'
import UserStatus from './UserStatus'
import { PlusIcon, XIcon } from '@heroicons/react/solid'
import { useCreateServer } from '../hooks/useCreateServer'
import { motion } from 'framer-motion'

const Sidebar = ({ handleShow }) => {
  const {create, error} =  useCreateServer()
  const [group, setGroup] = useState(false)

  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '') {
      create(name)
    }
  }

  return (
    <motion.div id='sidebar' initial={{x: 0}} whileInView={{x: 0}} transition={{type: 'tween'}} className='absolute flex flex-col w-full h-full max-w-sm overflow-auto text-white md:max-w-xl md:left-0 md:relative bg-neutral-300 dark:bg-zinc-800'>
      <XIcon onClick={handleShow} className='absolute top-0 right-0 z-20 w-10 h-10 p-2 md:hidden'/>
      <UserStatus />
      <Groups />
      <div onClick={() => setGroup(true)} className="flex flex-col items-center justify-center w-full py-2 mt-2 hover:bg-zinc-600 bg-zinc-700">
        {group && 
        <form className='w-full' onSubmit={handleSubmit}>
          <input type="text" placeholder='Group Name' className='w-full p-2 pt-0 bg-transparent outline-none placeholder:text-zinc-300' value={name} onChange={(e) => setName(e.target.value)}/>
        </form>}
        <PlusIcon className="relative z-10 w-7 h-7"/>
      </div>
    </motion.div>
  )
}

export default Sidebar