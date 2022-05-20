import ExperimentalCurves from '../components/ExperimentalCurves'
import { AuthContextProvider } from '../context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      <ExperimentalCurves />
    </AuthContextProvider>
  )
}

export default MyApp
