import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { useCollection } from "../hooks/useCollection"
import User from "./User"

const Members = ({ server }) => {
  const { documents:users } = useCollection('users')
  const ref = doc(db, 'groups', server.last)
  const [members, setMemebers] = useState([])

  useEffect(() => { 
    getDoc(ref)
      .then((res) => {
        setMemebers(res.data().users)
      })
  }, [server])

  return (
    <div className='flex-col items-center hidden w-full h-full overflow-auto lg:flex dark:bg-zinc-800 bg-neutral-300'>
      {/* w-full text-center bg-[#1a1a1a] */}
      <h2 className="sticky p-2 text-lg font-bold uppercase select-none">Members</h2>
      {/* <h2 className="w-full p-2 text-lg text-center uppercase bg-zinc-700">Online</h2> */}
      <div className="flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto">
        {users && members && users.map((user) => {
          return user.status && members.find((member) => member == user.id) && <User key={user.id} user={user} status="dark:bg-zinc-700" />
        })}
        {users && members && users.map((user) => {
          return !user.status && members.find((member) => member == user.id) && <User key={user.id} user={user} status="text-white bg-zinc-700 dark:bg-transparent" />
        })}
      </div>
    </div>
  )
}

export default Members