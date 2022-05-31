import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import Dashboard from '../components/Dashboard';
import Members from '../components/Members';
import Sidebar from '../components/Sidebar';
import { db, timestamp } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { ChevronRightIcon } from '@heroicons/react/solid';

// DONE: Work out responsiveness and add a loading screen
// DONE: Implement groups / chatrooms
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
  const [show, setShow] = useState(false)
  const { user, authIsReady, server, dispatch } = useAuthContext()

  useEffect(() => {
    if (user) {
      const ref = doc(db, 'users', user.uid)
      getDoc(ref).then((res) => {
        // console.log(res.data())
        dispatch({ type: 'SERVER', payload: { last: res.data().last, servers: res.data().servers } })
      }).catch(err=>console.log(err))
    }
  }, [user])

  const handleShow = () => {
    const sidebar = document.getElementById('sidebar')
    
    if (show) {
      sidebar.classList.remove('-left-[100%]')
      setShow(false)
    } else {
      sidebar.classList.add('-left-[100%]')
      setShow(true)
    }
  }
  
  useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
      .then((res) => {return res.json()})
      .then((res) => {console.log(timestamp.fromMillis(res.unixtime))})
      .catch((err) => console.log(err))

  }, [])

  useEffect(() => {
    if (authIsReady && !user) router.push('/home')
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
        <div onClick={handleShow} className='fixed w-10 h-10 rounded-r-full bg-zinc-600 top-[50%]'>
          <ChevronRightIcon className='relative w-10 h-10' />
        </div>
        <Sidebar handleShow={handleShow} />
        {(server && server.last) ? <Dashboard server={server}/> : <div id='messages' className='flex flex-col items-center justify-center w-full h-full col-span-3 overflow-auto text-center md:col-span-2 lg:col-span-4 xl:col-span-5'>
          <h1 className='text-2xl'>Select or Join a Server.</h1>
        </div>} 
        {(server && server.last) && <Members server={server}/>}
      </div>}
      {/* <button onClick={logout}>Logout</button> */}
    </>
  )
}
