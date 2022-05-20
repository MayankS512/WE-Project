import { useRouter } from 'next/router'
import { useState } from 'react'
import ExperimentalCurves from '../components/ExperimentalCurves'
import { AuthContextProvider } from '../context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      {useRouter().pathname !== '/' && <ExperimentalCurves />}
    </AuthContextProvider>
  )
}

export default MyApp
