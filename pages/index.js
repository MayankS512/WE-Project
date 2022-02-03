import Head from 'next/head'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'

const Box = () => {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.05
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <MeshWobbleMaterial color="lightblue"/>
    </mesh>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Next, Three & Tailwind Starter</title>
        <meta name="description" content="Made by Demon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Canvas>
        <ambientLight intensity={0.4} />
        <pointLight intensity={0.7} position={[2, 3, 4]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>

      <div className="absolute pointer-events-none top-0 left-0 h-full w-full flex items-center justify-center text-white">
        <h1 className="text-4xl">Welcome!</h1>
      </div>
    </>
  )
}
