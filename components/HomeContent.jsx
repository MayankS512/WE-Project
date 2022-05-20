import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";

const HomeContent = ({ tryIt }) => {
  //onMouseMove={mouseMove} 

  // const router = useRouter()
  // const redirect = (url) => {
  //   tl.pause()
  //   tl.timeScale(3).reverse()
  //   gsap.to('#bg-main', {
  //     // scale: 0,
  //     duration: 5,
  //     ease: 'power3.out',
  //     opacity: 0,
  //     filter: 'blur(1000px)'
  //   })
  //   setTimeout(() => {
  //     router.push(`/${url}`)
  //   }, (tl.totalDuration()/2.5 - 1) * 1000)
  // }
  
  return ( 
  <div className="absolute top-0 w-full h-full overflow-x-hidden transition-all">
    <Navbar home />
    <div className="w-screen h-60 sm:h-72"></div>
    <p className="mt-4 text-4xl ml-7 sm:text-3xl sm:ml-24">A new way to communicate.</p>
    <button onClick={tryIt} className="px-6 py-2 mt-4 transition-all duration-500 rounded shadow ml-7 sm:mt-10 text-md sm:text-2xl sm:ml-24 bg-[#1a1a1a] hover:bg-rose-800 shadow-rose-700 ">Try It!</button>
  </div> 
  );
}
 
export default HomeContent;