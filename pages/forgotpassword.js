import Head from "next/head";
import { useRouter } from "next/router";
import gsap from "gsap";
import { useEffect, useRef, useState, useContext } from "react";
import Curve from "../components/Curve";
import Link from "next/link";
import { AuthContext } from "../context/auth";
import { async } from "@firebase/util";

const Login = () => {
  const goback = useRef()
  const router = useRouter()

  const [email, setEmail] = useState("");

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {forgot, user} = useContext(AuthContext);

  const handleClick = async() => {
    try{
        setLoading(true)
        setError('')
        await forgot(email)
        console.log("Email Sent")
        router.push('/login')
    }catch(err){
        console.log(err)
        setError(err.message)
        setTimeout(()=>{
            setError('')
        }, 2000)
      }
     setLoading(false)
  }

  useEffect(()=>{
    if(user){
        router.push('/')
    }
  },[user])

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

        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" className="px-3 py-2 m-10 mt-8 text-lg text-black rounded-sm focus:outline-offset-4 focus:outline-gray-800 dark:focus:outline-gray-50 " placeholder="Email" />
        <button onClick={handleClick} disabled={loading} className="py-2 mx-10 mb-2 text-xl transition-all duration-300 bg-gray-800 rounded shadow-sm hover:bg-gray-700 focus:outline-0 focus:bg-gray-700">Send Email</button>
      </div>
    
    </div>
   );
}
 
export default Login;

// shadow-sm hover:shadow-md hover:shadow-gray-800 shadow-gray-800