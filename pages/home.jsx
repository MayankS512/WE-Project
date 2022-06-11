import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
import { OrbitControls, Environment, useDetectGPU } from '@react-three/drei'
import Device from '../three/Device'
import HomeContent from '../components/HomeContent'
import { useRef, useState } from 'react'

// Enforce SSG and SSR where necessary

// DONE (Maybe): Optimize Curve for rendering
// DONE: Add responsiveness to the whole site
// DONE: Work out some way to use useDetectGPU for lower end devices.


export default function Home() {  
  const canvas = useRef()

  const tryIt = () => {
    canvas.current.children[1].classList.remove('-z-[1]')
    canvas.current.children[1].classList.remove('blur-sm')
    canvas.current.children[1].classList.add('z-10')
    canvas.current.children[0].classList.add('blur-sm')
    canvas.current.children[1].children[1].classList.remove('hidden')
    canvas.current.children[1].children[2].classList.remove('hidden')
  }

  const leaveIt = () => {
    canvas.current.children[1].classList.remove('z-10')
    canvas.current.children[1].classList.add('-z-[1]')
    canvas.current.children[0].classList.remove('blur-sm')
    canvas.current.children[1].classList.add('blur-sm')
    canvas.current.children[1].children[1].classList.add('hidden')
    canvas.current.children[1].children[2].classList.add('hidden')
  }

  const [deviceState, setDeviceState] = useState('laptop')

  const handleChange = () => {
    switch(deviceState) {
      case 'laptop': 
        setDeviceState('tablet')
        break
      case 'tablet':
        setDeviceState('phone')
        break
      case 'phone':
        setDeviceState('laptop')
        break
      default:
        setDeviceState('laptop')
        break
    }
  }

  return (
    <div ref={canvas} className='w-full h-full dark:selection:bg-pink-700 selection:bg-red-500'>
      <Head>
        <title>Rudiment.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent tryIt={tryIt}/>

      {useDetectGPU().tier > 1 ?
      <div className='fixed -z-[1] blur-sm inset-0'>
        <Canvas className=''> 
            <pointLight intensity={0.7} position={[-2, 3, -4]} />
            <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false} enablePan={false} />
            <Device deviceState={deviceState} setDeviceState={setDeviceState} handleChange={handleChange}/>
            <Environment preset="city" />
        </Canvas>
        
      <button onClick={leaveIt} className="hidden absolute bottom-5 right-4 px-6 py-2 mt-4 rounded ml-7 transition-all duration-300 dark:transition-none sm:mt-10 text-md sm:text-xl sm:ml-24 dark:text-rose-700 hover:bg-[#2a2a2a] bg-[#1a1a1a] dark:hover:outline-rose-700 outline outline-0 dark:hover:outline-2 dark:bg-neutral-200 dark:hover:bg-neutral-200">Leave It!</button>
      
      <button onClick={handleChange} className="hidden absolute bottom-5 left-4 px-6 py-2 mt-4 rounded ml-7 transition-all duration-300 dark:transition-none sm:mt-10 text-md sm:text-xl sm:ml-24 dark:text-rose-700 hover:bg-[#2a2a2a] bg-[#1a1a1a] dark:hover:outline-rose-700 outline outline-0 dark:hover:outline-2 dark:bg-neutral-200 dark:hover:bg-neutral-200">Change It!</button>
      </div> :
        <Canvas className='fixed -z-[1]'></Canvas>
      }
      {/* </Suspense> */}
    </div>
  )
}
