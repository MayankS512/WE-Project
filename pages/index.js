import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";

// Dummy Loader
const loader = () => {
  return <div className='h-[100vh] w-[100vw] bg-black z-50 fixed top-0 left-0' />
}

export default function Home() {
  const router = useRouter()
  const { user, authIsReady } = useAuthContext()

  useEffect(() => {
    if (authIsReady && !user) router.push('/login')
  }, [user, authIsReady])
  return (
    <>
      <Head>
        <title>Rudiment.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {!authIsReady && <loader />}

      <h1>Hello</h1>
    </>
  )
}
