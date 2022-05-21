import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import Dashboard from '../components/Dashboard';
import Members from '../components/Members';
import Sidebar from '../components/Sidebar';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

// Work out responsiveness and add a loading screen
// Implement groups / chatrooms
// Implement user profile
// Implement user settings
// Implement user notifications
// Implement user search

// OPTIONAL
// Implement file sharing
// Implement voice calls
// Implement video calls
// Implement screenshare


export default function Home() {
  const router = useRouter()
  const { user, authIsReady, server, dispatch } = useAuthContext()

  useEffect(() => {
    if (user) {
      const ref = doc(db, 'users', user.uid)
      getDoc(ref).then((res) => {
        console.log(res._document.data.value.mapValue.fields.servers.arrayValue.values)
        dispatch({ type: 'SERVER', payload: { last: res._document.data.value.mapValue.fields.last.stringValue, servers: res._document.data.value.mapValue.fields.servers.arrayValue.values } })
      }).catch(err=>console.log(err))
    }
  }, [user])
  

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
        {(server && server.last) ? <Dashboard server={server}/> : <div id='messages' className='flex flex-col items-center justify-center w-full h-full col-span-3 overflow-auto text-center md:col-span-2 lg:col-span-3 xl:col-span-4'>
          <h1 className='text-2xl'>Select or Join a Server.</h1>
        </div>} 
        <Members />
      </div>}
      {/* <button onClick={logout}>Logout</button> */}
    </>
  )
}
