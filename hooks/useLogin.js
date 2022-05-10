import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { auth, db } from '../firebase/config.js'
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = (email, password) => {
    setError(null)

    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const ref = doc(db, 'users', res.user.uid)
      updateDoc(ref, { status: true })
      dispatch({ type: 'LOGIN', payload: res.user })
    })
    .catch((err) => {
      setError(err.message)
    })
  }

  return { error, login }
}
