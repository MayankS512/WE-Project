import { signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
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
      await setDoc(ref, {
        status: true,
        username: res.user.displayName,
        avatar: res.user.photoURL
      })

      dispatch({ type: 'LOGIN', payload: res.user })
    })
    .catch((err) => {
      setError(err.message)
    })
  }

  return { error, glogin }
}
