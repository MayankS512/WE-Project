import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSignup } from "../hooks/useSignup";
import { useGoogle } from "../hooks/useGoogle";
import { useLogin } from "../hooks/useLogin"
import { ArrowNarrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/solid"
import { useAuthContext } from "../hooks/useAuthContext";

// OPTIOANL: Create a separate reusable modal for login and register.

const InputField = ({ input, setInput, type = "text", placeholder = "Enter Value", register = true }) => {
  return (
    <>
      {register && 
      <motion.input
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.2}}
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

const Button = ({ children, add = "", onClick = () => {}, type = "button" }) => {
  return (
    <input type={type} onClick={onClick} className={`py-2 mx-10 mt-8 text-xl transition-all duration-300 bg-gray-800 rounded shadow-sm hover:bg-gray-700 focus:outline-0 focus:bg-gray-700 ${add}`} value={children}></input>
  )
}

const Login = () => {
  const router = useRouter()
  const [register, setRegister] = useState(false)
  const [error, setError] = useState(null)
  const { user } = useAuthContext()

  // Form States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // Signup Creds
  const {error: rerror, signup} = useSignup();

  // Login Creds
  const {error: lerror, login } = useLogin();

  // Google Login
  const {error: gerror, glogin} = useGoogle();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      if (password !== confirm) {
        setError('Passwords do not match')
        return
      }
      signup(email, password, username)
    } else {
      login(email, password)
    }
  }

  useEffect(() => {
    if (rerror) { 
      setError(rerror)
    }
  }, [rerror])

  useEffect(() => {
    if (lerror) {
      setError(lerror)
    }
  }, [lerror])

  useEffect(() => {
    if (gerror) {
      setError(gerror)
    }
  }, [gerror])

  useEffect(() => {
    if (user) router.push('/')
  }, [user])
  
  return ( 
    <div className="absolute top-0 flex items-center justify-center w-full h-full min-h-fit">
      <Head>
        <title>Rudiment.</title>
      </Head>

      <div className="absolute flex flex-row items-center sm:top-5 top-1 left-2 sm:left-10">
        {/* sm:shadow-gray-900 sm:shadow-lg */}
        <motion.button initial={{scale: 0, rotate: 0}} animate={{scale: 1, rotate: 360}} transition={{duration: 1}} onClick={() => {router.back()}} className="flex items-center justify-center w-16 h-16 font-serif text-3xl font-bold transition-colors duration-300 scale-0 rounded-full sm:bg-gray-800 sm:text-xl sm:hover:bg-gray-700 sm:focus:outline-offset-4 sm:focus:outline-gray-700 sm:font-normal"> 
          <ArrowNarrowLeftIcon className="relative w-8 h-8"/>
        </motion.button>
        <h1 className="text-4xl select-none sm:ml-10 sm:text-6xl lg:text-8xl font-Cinzel"><Link href='/home'>Rudiment.</Link></h1>
      </div>

      <form onSubmit={handleSubmit} className="absolute flex flex-col w-full max-w-md text-center top-[29%] mb-10 rounded-md xl:right-80 sm:shadow-lg sm:w-96 dark:sm:bg-neutral-700 sm:bg-zinc-100 shadow-black ">
        <InputField input={username} setInput={setUsername} placeholder="Username" register={register} />
        <InputField input={email} setInput={setEmail} type="email" placeholder="Email" />
        <InputField input={password} setInput={setPassword} type="password" placeholder="Password" />
        <InputField input={confirm} setInput={setConfirm} type="password" placeholder="Confirm Password" register={register} />
        <Button type="submit" onClick={handleSubmit}>{register ? "Register" : "Login"}</Button>
        <div className="mt-2" onClick={() => {setRegister(!register)}}>{register ? "Already have an account?" : "Don't have an account?"} <span className="text-blue-600 transition-colors duration-150 cursor-pointer hover:text-blue-400 dark:text-indigo-300 dark:hover:text-indigo-200">{register ? "Login" : "Register"}!</span></div>
        {/* <Button onClick={glogin} add="mb-4">Sign In With Google</Button> */}

        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="mt-4"></div>
      </form>
    </div>
   );
}
 
export default Login;

// shadow-sm hover:shadow-md hover:shadow-gray-800 shadow-gray-800