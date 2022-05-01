import Head from "next/head";
import { useRouter } from "next/router";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Curve from "../components/Curve";
import Link from "next/link";

const Login = () => {
  const goback = useRef()
  const router = useRouter()
  const [signup, setSignup] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");


  useEffect(() => {
    gsap.to(goback.current, {
      scale: 1,
      rotate: '720deg',
      duration: 1.5,
      ease: 'power2.out'
    })
  })
  return ( 
    <div className="absolute top-0 flex items-center justify-center w-full h-full overflow-x-hidden">
      <Head>
        <title>Rudiment.</title>
      </Head>

      <Curve />

      <div className="absolute flex flex-row items-center top-5 left-10">

      <button ref={goback} onClick={() => {router.back()}} className="w-16 h-16 font-serif transition-colors duration-300 scale-0 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 shadow-gray-900 focus:outline-offset-4 focus:outline-gray-700"> 
      &larr;
      </button>
      <h1 className="ml-10 text-4xl lg:text-8xl font-Cinzel"><Link href='/home'>Rudiment.</Link></h1>
      </div>

      <div className="absolute flex flex-col ml-32 text-center rounded-md shadow-lg right-80 w-96 dark:bg-neutral-700 bg-zinc-100 shadow-black">
        {Signup && 
        <input value={fullname} onChange={(e) => {setFullname(e.target.value)}} type="text" className="px-3 py-2 mx-10 mt-8 text-lg text-black rounded-sm focus:outline-offset-4 focus:outline-gray-800 dark:focus:outline-gray-50 " placeholder="Full Name" />
        }
        <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" className="px-3 py-2 mx-10 mt-8 text-lg text-black rounded-sm focus:outline-offset-4 focus:outline-gray-800 dark:focus:outline-gray-50 " placeholder="Username" />
        {Signup && 
        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" className="px-3 py-2 mx-10 mt-8 text-lg text-black rounded-sm focus:outline-offset-4 focus:outline-gray-800 dark:focus:outline-gray-50 " placeholder="Email" />
        }
        {Signup && 
        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" className="px-3 py-2 mx-10 mt-8 text-lg text-black rounded-sm focus:outline-offset-4 focus:outline-gray-800 dark:focus:outline-gray-50 " placeholder="Password" />
        }
        <input value={confirm} onChange={(e) => {setConfirm(e.target.value)}} type="password" className="px-3 py-2 m-10 text-lg text-black rounded-sm focus:outline-offset-4 focus:outline-gray-800 dark:focus:outline-gray-50" placeholder="Confirm Password" />
        <button className="py-2 mx-10 mb-2 text-xl transition-all duration-300 bg-gray-800 rounded shadow-sm hover:bg-gray-700 focus:outline-0 focus:bg-gray-700">{signup ? "Signup" : "Login"}</button>
        <div onClick={() => {setSignup(!signup)}} className="mb-8"> {signup ? "Already have an account?" : "Don't have an account?"} <span className="text-blue-600 cursor-pointer">{signup ? "Login" : "Register"}</span></div>
        <button className="py-2 mx-10 mb-8 text-xl transition-all duration-300 bg-gray-800 rounded shadow-sm hover:bg-gray-700 focus:outline-0 focus:bg-gray-700">Register</button>
      </div>
    
    </div>
   );
}
 
export default Login;

// shadow-sm hover:shadow-md hover:shadow-gray-800 shadow-gray-800