import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import Device from '../three/Device'
// import Curve from '../components/Curve'
import HomeContent from '../components/HomeContent'
import { useRef } from 'react'
import CurveExp from '../components/CurveExp'


export default function Home() {
  const mouse = {
    x: -Math.PI/2 + 0.5,
    y: 0
  }
  
  // const mouseMove = (e) => {
  //   if (window) {
  //     mouse.x = -Math.PI/2 + (0.5 - e.clientX/innerWidth) * 2
  //     mouse.y = (0.5 - e.clientY/innerHeight) * 2
  //   }
  // }

  

  const canvas = useRef()

  const tryIt = () => {
    canvas.current.children[0].classList.remove('-z-[1]')
    canvas.current.children[0].classList.add('z-10')
  }

  const leaveIt = () => {
    canvas.current.children[0].classList.remove('z-10')
    canvas.current.children[0].classList.add('-z-[1]')
  }

  return (
    <div ref={canvas} className='w-full h-full'>
      <Head>
        <title>Rudiment.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Canvas className='fixed -z-[1]'>
        {/* <color attach="background" args={["#030305"]} /> */}
        <ambientLight intensity={0.4} />
        <pointLight intensity={0.7} position={[2, 3, 4]} />
        <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false} enablePan={false} />
        <Suspense fallback={null}>
          <Device mouse={mouse} leaveIt={leaveIt}/>
        </Suspense>
      </Canvas>

      <CurveExp />

      <HomeContent tryIt={tryIt}/>
      {/* <Navbar /> */}
    </div>
  )
}
