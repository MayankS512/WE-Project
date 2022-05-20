import { motion, useViewportScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from "@heroicons/react/solid"
import { useState } from "react";

const titleVariants = {
  initial: { fontSize: '' }
}

const Rudiment = ({ home }) => {
  return (
    <>
      {!home && <li className="z-30 ml-6 text-4xl sm:ml-16 font-Cinzel"><Link href='/home'>Rudiment.</Link></li>}
      {home && 
        <motion.li 
          className="absolute ml-16 text-4xl select-none font-Cinzel"
          initial={{
            fontSize: '2.25rem',
            marginTop: 0,
            marginLeft: '4rem'
          }}
          animate={{
            fontSize: '8rem',
            marginTop: '32rem',
            marginLeft: '6rem',
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          // whileInView={{
          // }}
        >
          Rudiment.
        </motion.li>
        }
    </>
  )
} 

const sidenavVariants = {
  leave: { x: '100%' },
  enter: { x: 0}
}

const Navbar = ({ home, redirect }) => {
  const router = useRouter()
  const [nav, setNav] = useState(false)
  
  return ( 
  <nav className="mt-4 mr-5 overflow-hidden text-xl sm:mr-16 sm:mt-10">
    <ul className="items-center hidden sm:flex sm:flex-row sm:gap-16 md:gap-24 lg:gap-32 xl:gap-44">
      <Rudiment home={home} /> 
      <li className="ml-auto"><Link href="/blog">Blog</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><button onClick={() => router.push('/login')} className="px-6 py-2 text-xl transition-all duration-500 rounded bg-[#1a1a1a] shadow hover:bg-indigo-800 shadow-indigo-700">Login</button></li>
    </ul>
    
    <ul className="fixed flex items-center w-screen sm:hidden">
      <Rudiment />
      <li className="ml-auto mr-5">
        {/* 43 */}
        <MenuIcon className="relative z-10" height={40} width={40} onClick={() => setNav(true)}/>
      </li>
    </ul>

    <motion.div variants={sidenavVariants} transition={{ duration: 0.15 }} initial='leave' animate={nav ? 'enter' : 'leave'} className="fixed top-0 z-20 flex flex-col items-center w-screen h-screen overflow-hidden opacity-95 bg-zinc-900 sm:hidden">
      <XIcon className="relative mt-4 ml-auto mr-5" height={40} width={40} onClick={() => setNav(false)}/>
      <ul className="flex flex-col mt-32 gap-28">
      <li className="text-center"><Link href="/blog">Blog</Link></li>
      <li className="text-center"><Link href="/about">About</Link></li>
      <li><button onClick={() => router.push('/login')} className="px-6 py-2 text-xl transition-all duration-500 rounded shadow hover:bg-indigo-800 shadow-indigo-700">Login</button></li>
      </ul>
    </motion.div>
  </nav>
  );
}
 
export default Navbar;

{/* {home && <li><button onClick={() => redirect('login')} className="px-6 py-2 text-xl transition-all duration-500 rounded shadow hover:shadow-lg hover:shadow-indigo-900 shadow-indigo-900 bg-gradient-to-tr from-indigo-800 to-violet-300">Login</button></li>} */}
{/* {!home && <li><button onClick={() => router.push('/login')} className="px-6 py-2 text-xl transition-all duration-500 rounded shadow hover:shadow-lg hover:shadow-indigo-900 shadow-indigo-900 bg-gradient-to-tr from-indigo-800 to-violet-300">Login</button></li>} */}