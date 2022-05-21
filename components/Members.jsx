import { useCollection } from "../hooks/useCollection"
import User from "./User"

const Members = () => {
  const { documents:users } = useCollection('users')

  return (
    <div className='flex-col items-center hidden w-full h-full overflow-auto lg:flex dark:bg-zinc-800 bg-neutral-300'>
      {/* w-full text-center bg-[#1a1a1a] */}
      <h2 className="sticky p-2 text-lg font-bold uppercase select-none">Members</h2>
      {/* <h2 className="w-full p-2 text-lg text-center uppercase bg-zinc-700">Online</h2> */}
      <div className="flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto">
        {users && users.map((user) => {
          return user.status && <User key={user.id} user={user} status="bg-zinc-700" />
        })}
        {users && users.map((user) => {
          return !user.status && <User key={user.id} user={user} />
        })}
      </div>
    </div>
  )
}

export default Members