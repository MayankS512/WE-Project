import { doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase/config'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'

const Groups = () => {
  const { documents } = useCollection('groups')
  const { dispatch, user, server } = useAuthContext()
  
  const handleClick = (server_id) => {
    const { uid } = user
    const ref = doc(db, 'users', uid)
    updateDoc(ref, { last: server_id })

    dispatch({ type: 'SERVER', payload: {...server, last: server_id}})
  }
  
  return (
    <div className="flex flex-col flex-grow overflow-auto none">
      {documents && documents.map(group => {
        if (server && server.servers && server.servers.find((server) => server.stringValue === group.id || server === group.id)) {
          return <div onClick={() => handleClick(group.id)} className="py-2 mt-1 text-center cursor-pointer select-none md:text-xl hover:bg-zinc-700" key={group.id}>
          {group.name}
        </div>
        }
      })}
    </div>
  )
}

export default Groups