import Head from "next/head";
import Curve from "../components/Curve";
import { useRouter } from "next/router";
import gsap from "gsap";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter()

  useEffect(() => {
    gsap.to('#goback', {
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

      <button id="goback" onClick={() => {router.back()}} className="absolute w-16 h-16 font-serif transition-colors duration-300 scale-0 rounded-full shadow-lg bg-neutral-700 hover:bg-neutral-600 shadow-gray-900 top-10 left-10 focus:outline-offset-4 focus:outline-gray-50"> 
      &larr;
      </button>

      <div className="flex flex-col items-center h-full justify-evenly">
        <h1 className="mt-2 text-4xl lg:text-8xl">Rudiment.</h1>
        <div className="flex flex-col text-center rounded-md shadow-lg w-96 bg-neutral-700 shadow-black">
          <input type="text" className="px-3 py-2 mx-10 mt-8 text-lg text-black rounded-sm focus:outline-offset-4 focus:outline-gray-50 " placeholder="Username" />
          <input type="password" className="px-3 py-2 m-10 text-lg text-black rounded-sm focus:outline-0" placeholder="Password" />
          <button className="py-2 mx-10 mb-8 text-xl transition-all duration-300 bg-indigo-500 hover:bg-indigo-400 focus:outline-0 focus:bg-indigo-400">Login</button>
          <button className="py-2 mx-10 mb-8 text-xl transition-all duration-300 shadow-sm bg-lime-500 hover:bg-lime-400 focus:outline-0 focus:bg-lime-400">Register</button>
        </div>
      </div>
    </div>
   );
}
 
export default Login;

// shadow-sm hover:shadow-md hover:shadow-gray-800 shadow-gray-800