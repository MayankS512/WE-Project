import Head from "next/head";
import { useRouter } from "next/router";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Curve from "../components/Curve";
import Link from "next/link";
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin"
import { useAuthContext } from "../hooks/useAuthContext";

const InputField = ({ input, setInput, type = "text", placeholder = "Enter Value", register = true }) => {
  return (
    <>
      {register && 
      <input 
        value={input} 
        onChange={(e) => {setInput(e.target.value)}} 
        type={type} 
        className="px-3 py-2 mx-10 mt-8 text-lg text-black rounded-sm focus:outline-offset-4 focus:outline-gray-800 dark:focus:outline-gray-50" 
        placeholder={placeholder} 
      />
      }
    </>
  )
}

const Button = ({ children, add = "", onClick = () => {} }) => {
  return (
    <button onClick={onClick} className={`py-2 mx-10 mt-8 text-xl transition-all duration-300 bg-gray-800 rounded shadow-sm hover:bg-gray-700 focus:outline-0 focus:bg-gray-700 ${add}`}>{children}</button>
  )
}

const Login = () => {
  const goback = useRef()
  const router = useRouter()
  const [register, setRegister] = useState(false);
  const { user } = useAuthContext()

  // Form States
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // Signup Creds
  const {error: rerror, signup} = useSignup();

  // Login Creds
  const {error: lerror, login } = useLogin();

  const handleSubmit = () => {
    if (register) {
      signup(email, password)
    } else {
      login(email, password)
    }
  }

  useEffect(() => {
    if (user) router.push('/')
  }, [user])

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

      {/* <Curve /> */}

      <div className="absolute flex flex-row items-center top-5 left-10">

      <button ref={goback} onClick={() => {router.back()}} className="w-16 h-16 font-serif transition-colors duration-300 scale-0 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 shadow-gray-900 focus:outline-offset-4 focus:outline-gray-700"> 
      &larr;
      </button>
      <h1 className="ml-10 text-4xl lg:text-8xl font-Cinzel"><Link href='/home'>Rudiment.</Link></h1>
      </div>

      <div className="absolute flex flex-col ml-32 text-center rounded-md shadow-lg right-80 w-96 dark:bg-neutral-700 bg-zinc-100 shadow-black">
        {rerror && <p className="text-center text-red-500">{rerror}</p>}
        {lerror && <p className="text-center text-red-500">{lerror}</p>}
        <InputField input={fullname} setInput={setFullname} placeholder="Full Name" register={register} />
        <InputField input={username} setInput={setUsername} placeholder="Username" />
        <InputField input={email} setInput={setEmail} type="email" placeholder="Email" register={register} />
        <InputField input={password} setInput={setPassword} type="password" placeholder="Password" />
        <InputField input={confirm} setInput={setConfirm} type="password" placeholder="Confirm Password" register={register} />
        <Button onClick={handleSubmit}>{register ? "Register" : "Login"}</Button>
        <div className="mt-2" onClick={() => {setRegister(!register)}}>{register ? "Already have an account?" : "Don't have an account?"} <span className="text-blue-600 transition-colors duration-150 cursor-pointer hover:text-blue-400 dark:text-indigo-300 dark:hover:text-indigo-200">{register ? "Login" : "Register"}!</span></div>
        <Button add="mb-8">Sign In With Google</Button>
      </div>
    
    </div>
   );
}
 
export default Login;

// shadow-sm hover:shadow-md hover:shadow-gray-800 shadow-gray-800