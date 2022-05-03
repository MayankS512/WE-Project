import Head from 'next/head'
import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';
// import blob1 from '../public/blob1.svg'

export default function Home() {

  const {logout} = useContext(AuthContext)
  const router = useRouter()

  const handleLogout = async() => {
    await logout();
    router.push('/login');
  }

  return (
    <>
      <Head>
        <title>Rudiment.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello</h1>
      <button onClick={handleLogout} className="py-2 mx-10 mb-2 text-xl transition-all duration-300 bg-gray-800 rounded shadow-sm hover:bg-gray-700 focus:outline-0 focus:bg-gray-700">logout</button>

    </>
  )
}
