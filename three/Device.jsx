import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion-3d'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const screenVariants = {
  initial: {
    x: 1.24,
    y: 0,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scaleX: 1.50,
    scaleY: 0.07,
    scaleZ: 2.1,
  },
  laptop: {
    x: 1.24,
    y: 0,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: -1.92,
    scaleX: 1.50,
    scaleY: 0.07,
    scaleZ: 2.1,
  },
  tablet: {
    x: 0,
    scaleX: 0.8 * 1.24,
    scaleZ: 0.8 * 1.77,
    rotateZ: -Math.PI/2,
  },
  phone: {
    x: 0,
    scaleX: 1 * 1.24,
    scaleZ: 0.35 * 1.77,
    rotateZ: -Math.PI/2,
  }
}

const keyboardVariants = {
  initial: {
    x: 1.24,
    y: 0,
    z: 0,
    scaleX: 1.2,
    scaleY: 0.07,
    scaleZ: 2.1
  },
  laptop: {
    x: 1.24,
    y: 0,
    z: 0,
    scaleX: 1.2,
    scaleY: 0.07,
    scaleZ: 2.1
  },
  tablet: {
    x: 0,
    y: 0,
    z: 0,
    scaleX: 0,
    scaleY: 0,
    scaleZ: 0
  },
  phone: {
    x: 0,
    y: 0,
    z: 0,
    scaleX: 0,
    scaleY: 0,
    scaleZ: 0
  }
}

const deviceVariants = {
  initial: {
    width: 1024,
    height: 922
  },
  laptop: {
    width: 1024,
    height: 922
  },
  tablet: {
    width: 800,
    height: 710,
  },
  phone: {
    width: 370,
    height: 750
  }
}

// Add details to the models
// DONE: Switch to framer motion
// Could try to add glare somehow...

export default function Device({ leaveIt, ...props }) {
  const [deviceState, setDeviceState] = useState('laptop')
  const [startup, setStartup] = useState(true)
  const group = useRef()
  const screen = useRef()
  const { nodes, materials } = useGLTF('/device.glb')

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

  useEffect(() => {
    const s = screen.current.children[0]
    switch(deviceState) {
      case 'laptop': 
        s.scale.x = 0.077
        s.scale.y = 0.079
        break
      case 'tablet':
        s.scale.x = 0.101
        s.scale.y = 0.105
        break
      case 'phone':
        s.scale.x = 0.206
        s.scale.y = 0.103
        break
      default:
        s.scale.x = 0.077
        s.scale.y = 0.079
        break
    }
  }, [deviceState])
  
  useFrame((state) => {
    // return;
    const time = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(time / 2) / 10 -0.05 , 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(time / 4) / 10 + 1, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(time / 4) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-10 + Math.sin(time)) / 5, 0.1)
  })

  return (
    <>
    <motion.group 
      ref={group} 
      onClick={handleChange} 
      initial={{
        scale: 0,
        // rotateY: 5,
        // y: -2
      }}
      animate={{
        scale: 1.2,
        // rotateY: 1.25,
        // y: -2
      }}
      transition={{
        duration: 2,
        delay: 1
      }}
      onPointerMissed={() => {leaveIt()}} 
      dispose={null}
      {...props} 
    >
      <motion.mesh
        variants={keyboardVariants}
        initial="initial"
        animate={deviceState}
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material} 
      />
      <motion.mesh
        variants={screenVariants}
        initial="initial"
        animate={deviceState}
        transition={startup && {
          duration: 1,
          delay: 1.5,
        }}
        onAnimationComplete={() => setStartup(false)}
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        ref={screen}
      >
        <Html scale={[0.077, 0.079, 0.0001]} rotation={[1.92, 0, Math.PI/2]} transform occlude position={[-1, -0.0172541663052, 0]}>
          {/* <DeviceContent /> */}
          <motion.iframe 
            variants={deviceVariants}
            initial="initial"
            animate={deviceState}
            src="https://rudiment.vercel.app/login" 
          />
          
        </Html>
      </motion.mesh>
    </motion.group>
    </>
  )
}

useGLTF.preload('/device.glb')
