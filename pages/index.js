import Head from 'next/head'
import MainContent from '../components/MainContent'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import Box from '../three/Box'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next, Three & Tailwind Starter</title>
        <meta name="description" content="Made by Demon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Canvas>
        <color attach="background" args={["#030305"]} />
        <ambientLight intensity={0.4} />
        <pointLight intensity={0.7} position={[2, 3, 4]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>

      <MainContent />
    </>
  )
}
