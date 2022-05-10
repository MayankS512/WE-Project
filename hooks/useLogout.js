import { signOut } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { auth, db } from "../firebase/config.js"
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogout = () => {
  const { user, dispatch } = useAuthContext()

  const logout = async () => {
    await signOut(auth)
      .then(async () => {
        const { uid } = user
        const ref = doc(db, 'users', uid)
        updateDoc(ref, { status: false })
        // console.log('User Signed Out');
        dispatch({ type: 'LOGOUT' })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return { logout }
}
