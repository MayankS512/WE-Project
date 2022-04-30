import Navbar from "./Navbar";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";

const HomeContent = ({ tryIt }) => {
  //onMouseMove={mouseMove} 
  const header = useRef()
  const rudiment = useRef()
  const para = useRef()
  const button = useRef()

  const tl = gsap.timeline()

  const router = useRouter()
  const redirect = (url) => {
    tl.pause()
    tl.timeScale(3).reverse()
    gsap.to('#bg-main', {
      // scale: 0,
      duration: 5,
      ease: 'power3.out',
      opacity: 0,
      filter: 'blur(1000px)'
    })
    setTimeout(() => {
      router.push(`/${url}`)
    }, (tl.totalDuration()/2.5 - 1) * 1000)
  }

  useEffect(() => {
    const head = header.current
    const rud = rudiment.current
    const p = para.current
    const but = button.current

    // gsap.to(head, {
    //   marginTop: '13rem',
    //   marginLeft: '16rem',
    //   duration: 3,
    //   delay: 2,
    //   ease: 'power2.out'
    // })
    // gsap.to(rud, {
    //   fontSize: '8rem',
    //   lineHeight: 1,
    //   opacity: 0.8,
    //   delay: 2,
    //   duration: 3,
    //   ease: 'power2.out'
    // })
    // gsap.to(p, {
    //   opacity: 0.9,
    //   duration: 1,
    //   delay: 4,
    //   ease: 'power3.out'
    // })
    // gsap.to(but, {
    //   opacity: 1,
    //   duration: 1,
    //   delay: 4,
    //   ease: 'power3.out'
    // })

    tl.to(head, {
      marginTop: '13rem',
      marginLeft: '16rem',
      duration: 3,
      delay: 2,
      ease: 'power2.out'  
    }).to(rud, {
      fontSize: '8rem',
      lineHeight: 1,
      opacity: 0.8,
      delay: -3,
      duration: 3,
      ease: 'power2.out'
    }).to(p, {
      opacity: 0.9,
      duration: 0.75,
      delay: -0.5,
      // ease: 'power3.out'
    }).to(but, {
      opacity: 1,
      duration: 0.75,
      delay: -0.5,
      // ease: 'power3.out'
    })
  })
  
  return ( 
  <div className="absolute top-0 w-full h-full overflow-x-hidden">
    <Navbar home redirect={redirect} />
    <div ref={header} className="ml-16 -mt-[2.6rem]">
      <h1 ref={rudiment} className="text-4xl opacity-100 font-Cinzel">Rudiment.</h1>
      <p ref={para} className="mt-2 ml-2 text-3xl opacity-0">The new way to get sh*t done.</p>
      <button ref={button} onClick={tryIt} className="px-6 py-2 mt-10 ml-2 text-2xl transition-all duration-500 rounded shadow opacity-0 hover:shadow-lg hover:shadow-red-900 shadow-rose-700 bg-gradient-to-tr from-rose-800 to-red-300">Try It!</button>
    </div>
  </div> 
  );
}
 
export default HomeContent;