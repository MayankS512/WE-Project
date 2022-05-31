import { signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { auth, db, provider } from '../firebase/config.js'
import { useAuthContext } from '../hooks/useAuthContext'

export const useGoogle = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const glogin = () => {
    setError(null)

    signInWithPopup(auth, provider)
    .then(async (res) => {
      const ref = doc(db, 'users', res.user.uid)
      const user = await getDoc(ref)
      console.log(user)
      if (!user._document)
      await setDoc(ref, {
        status: true,
        username: res.user.displayName,
        avatar: res.user.photoURL,
        servers: [],
        last: ''
      })
      await updateDoc(ref, {
        status: true,
      })
      dispatch({ type: 'LOGIN', payload: res.user })
    })
    .catch((err) => {
      setError(err.message)
    })
  }

  return { error, glogin }
}
