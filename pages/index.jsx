import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import Dashboard from '../components/Dashboard';
import Members from '../components/Members';
import Sidebar from '../components/Sidebar';

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
      
      {!authIsReady && <div className='fixed top-0 left-0 z-50 w-full h-full dark:bg-[#1a1a1a] bg-neutral-200' />}

      {/* Can try discord like responsive with flex box and fixed width for sidebars */}
      {user && <div className='grid w-full h-full grid-cols-3 lg:grid-cols-5 xl:grid-cols-6'>
        <Sidebar />
        <Dashboard  />
        <Members />
      </div>}
      {/* <button onClick={logout}>Logout</button> */}
    </>
  )
}
