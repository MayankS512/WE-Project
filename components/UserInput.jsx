import { useState } from 'react'
// import { EmojiHappyIcon, UploadIcon } from '@heroicons/react/solid'
import { db, timestamp } from '../firebase/config'
import { collection, addDoc} from 'firebase/firestore'
import { useAuthContext } from '../hooks/useAuthContext'

const UserInput = ({ disabled }) => {
  const [input, setInput] = useState('')
  // const [files, setFiles] = useState([])
  
  const { user, server } = useAuthContext()
  const ref = collection(db, server.last)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const time = await fetch('https://worldtimeapi.org/api/ip')
    .then((res) => {return res.json()})
    .then((res) => {return res.unixtime * 1000})
    .catch((err) => {console.log(err);return Date.now()})

    console.log(time);
    if (input.length == 0) return
    const container = document.getElementById('messages')
    await addDoc(ref, {
        body: input,
        from: user.displayName,
        avatar: user.photoURL,
        createdAt: timestamp.fromMillis(time)
    }).then(() => {container.scrollTop = container.scrollHeight})
    setInput('')
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex p-3 m-2 min-h-[3rem] overflow-hidden rounded-md bg-zinc-800'>
      <input className='flex-grow text-white outline-none bg-zinc-800 placeholder:text-neutral-400 disabled:placeholder:text-neutral-500' type='text' value={input} onChange={(e) => {setInput(e.target.value)}} placeholder="Send Message" disabled={disabled}></input>
      {/* <span className='pl-2 select-none text-zinc-600'>│</span> */}
      {/* <button disabled={disabled} className='px-2 disabled:text-neutral-500 text-neutral-400 hover:text-emerald-400 disabled:hover:text-neutral-500'> <UploadIcon className='relative z-10 w-5 h-5 ' /></button> */}
      {/* <button disabled={disabled} className='px-2 text-neutral-400 hover:text-amber-400 disabled:text-neutral-500 disabled:hover:text-neutral-500'> <EmojiHappyIcon className='relative z-10 w-5 h-5' /></button> */}
      {/* <button className='px-2 text-lg'><span style={{lineHeight: '1.2rem'}} className='grayscale hover:grayscale-0'>😄</span></button> */}
    </form>
  )
}

export default UserInput