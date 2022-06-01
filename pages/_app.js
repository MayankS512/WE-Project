import { useRouter } from 'next/router'
import { Suspense } from 'react'
import ExperimentalCurves from '../components/ExperimentalCurves'
import { AuthContextProvider } from '../context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Suspense fallback={null}>
      <Component {...pageProps} />
      </Suspense>
      {useRouter().pathname !== '/' && <ExperimentalCurves />}
    </AuthContextProvider>
  )
}

export default MyApp