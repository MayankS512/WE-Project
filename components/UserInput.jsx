import { useState } from 'react'
import { EmojiHappyIcon, UploadIcon } from '@heroicons/react/solid'
import { db, timestamp } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'
import { useAuthContext } from '../hooks/useAuthContext'

const UserInput = () => {
  const [input, setInput] = useState('')
  const [files, setFiles] = useState([])
  
  const { user } = useAuthContext()
  const ref = collection(db, 'messages')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.length == 0) return
    const container = document.getElementById('messages')
    await addDoc(ref, {
      message: input,
      from: user.displayName,
      avatar: user.photoURL,
      createdAt: timestamp.now()
    }).then(() => {container.scrollTop = container.scrollHeight})
    // console.log(input) // Firebase Logic
    setInput('')
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex h-20 p-3 m-2 overflow-hidden rounded-md bg-zinc-800'>
      <input className='flex-grow outline-none dark:text-white bg-zinc-800 placeholder:text-neutral-400' type='text' value={input} onChange={(e) => {setInput(e.target.value)}} placeholder="Send Message"></input>
      <span className='pl-2 select-none text-zinc-600'>│</span>
      <button className='px-2 text-neutral-400'> <UploadIcon className='relative z-10 w-5 h-5 hover:text-emerald-400' /></button>
      <button className='px-2 text-neutral-400'> <EmojiHappyIcon className='relative z-10 w-5 h-5 hover:text-amber-400' /></button>
      {/* <button className='px-2 text-lg'><span style={{lineHeight: '1.2rem'}} className='grayscale hover:grayscale-0'>😄</span></button> */}
    </form>
  )
}

export default UserInput