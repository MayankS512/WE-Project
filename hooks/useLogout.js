import { signOut } from "firebase/auth"
import { auth } from "../firebase/config,js"
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    signOut(auth)
      .then(() => {
        // console.log('User Signed Out');
        dispatch({ type: 'LOGOUT' })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return { logout }
}
