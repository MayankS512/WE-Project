import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
import { OrbitControls, Environment, useDetectGPU } from '@react-three/drei'
import Device from '../three/Device'
import HomeContent from '../components/HomeContent'
import { useRef } from 'react'

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
  }

  const leaveIt = () => {
    canvas.current.children[1].classList.remove('z-10')
    canvas.current.children[1].classList.add('-z-[1]')
    canvas.current.children[0].classList.remove('blur-sm')
    canvas.current.children[1].classList.add('blur-sm')
  }

  return (
    <div ref={canvas} className='w-full h-full dark:selection:bg-pink-700 selection:bg-red-500'>
      <Head>
        <title>Rudiment.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent tryIt={tryIt}/>

      {/* <Suspense fallback={null}> */}
      {/* !useDetectGPU().isMobile ? */}
      {useDetectGPU().tier > 1 ?
      <div className='fixed -z-[1] blur-sm inset-0'>
        <Canvas className=''> 
            <pointLight intensity={0.7} position={[-2, 3, -4]} />
            <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false} enablePan={false} />
            <Device leaveIt={leaveIt}/>
            <Environment preset="city" />
        </Canvas>
      </div> :
        <Canvas className='fixed -z-[1]'></Canvas>
      }
      {/* </Suspense> */}
    </div>
  )
}
