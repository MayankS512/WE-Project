import { useState } from 'react'
import { db } from '../firebase/config.js'
import { collection, addDoc, updateDoc, arrayUnion, doc } from 'firebase/firestore'
import { useAuthContext } from './useAuthContext.js'

export const useCreateServer = () => {
  const [error, setError] = useState(null)
  const {user, dispatch, server} = useAuthContext()
  
  const { uid } = user
  const ref2 = doc(db, 'users', uid)

  const create = async (name) => {
    const ref = collection(db, 'groups')
    setError(null)
    await addDoc(ref, {
      name,
      users: [uid]
    }).then(async (res) => {
      await updateDoc(ref2, { last: res.id, servers: arrayUnion(res.id) })
      dispatch({ type: 'SERVER', payload: {last: res.id, servers: [...server.servers, res.id]} })
    })
    .catch((err) => {setError(err.message)})
    // location.reload()
  }

  const join = async (name) => {
    const ref = doc(db, 'groups', name)
    await updateDoc(ref, { 
      users: arrayUnion(uid) 
    }).then(async () => {
      // console.log('started')
      await updateDoc(ref2, { last: name, servers: arrayUnion(name) })
      dispatch({ type: 'SERVER', payload: {last: res.id, servers: [...server.servers, res.id]} })
    }).catch((err) => {setError(err.message)})

    location.reload()
  }

  return { error, create, join }
}
