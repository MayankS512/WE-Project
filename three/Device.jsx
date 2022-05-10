import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import DeviceContent from '../components/DeviceContent'

// Default Values for Keyboard
/* 
  position={[1.24, 1.01, 0]}
  scale={[1.24, 0.04, 1.77]}
*/ 

// Default Values for Screen
/*
  position={[1.24, 1.03, 0]}
  rotation={[0, 0, -1.92]}
  scale={[1.24, 0.04, 1.77]}
*/

export default function Device({ mouse, leaveIt, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/device.glb')

  const keyboardRef = useRef()
  const screenRef = useRef()
  const wrapper = useRef()
  const yPos = useRef(-5)

  const Scale = {
    base: {
      x: 1.24,
      y: 0.04,
      z: 1.77
    },
    tablet: 0.8,
    phone: {
      x: 0.65,
      z: 0.2
    }
  }

  useEffect(() => {
    const main = group.current

    const timeout = setTimeout(() => {
      gsap.to(main.scale, {
        x: 1.1,
        y: 1.1, 
        z: 1.1,
        duration: 2,
        ease: 'power3.out'
      })
      unfold()
    }, 2000)

    return () => clearTimeout(timeout)
  })

  const unfold = () => {
    // const keyboard = keyboardRef.current
    const screen = screenRef.current

    // Open Position

    gsap.to(screen.rotation, {
      z: -1.92,
      delay: 0.25,
      duration: 2,
      ease: "power4.out"
    })
  }

  const tablet = () => {
    const keyboard = keyboardRef.current
    const screen = screenRef.current
    const wrap = wrapper.current

    gsap.to(group.current.scale, { 
      x: 1,
      y: 1,
      z: 1,
      duration: 2, 
      ease: "power4.out"
    })
    gsap.to(keyboard.scale, {
      x: 0,
      y: 0, 
      z: 0,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.scale, {
      x: Scale.base.x * Scale.tablet,
      z: Scale.base.z * Scale.tablet,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.rotation, {
      z: -Math.PI/2,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(wrap, {
      height: '720px',
      width: '800px',
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.children[0].scale, {
      y: 0.1,
      duration: 1.5,
      ease: "power4.out"
    })
    gsap.to(group.current.position, {
      z: 0,
      x: 0, 
      duration: 2, 
      ease: "power4.out"
    })
    yPos.current = -5

  }

  const phone = () => {
    const keyboard = keyboardRef.current
    const screen = screenRef.current
    const wrap = wrapper.current

    gsap.to(keyboard.scale, {
      x: 0,
      y: 0, 
      z: 0,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.scale, {
      x: Scale.base.x * Scale.phone.x,
      z: Scale.base.z * Scale.phone.z,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.rotation, {
      z: -Math.PI/2,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(wrap, {
      height: '1500px',
      width: '750px', 
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.children[0].scale, {
      y: 0.05,
      duration: 1.5,
      ease: "power4.out"
    })
    gsap.to(group.current.scale, {
      delay: 1, 
      x: 3,
      y: 3,
      z: 3,
      duration: 2, 
      ease: "power4.out"
    })
    gsap.to(group.current.position, {
      delay: 1,
      z: 4,
      x: -2, 
      duration: 1, 
      ease: "power4.out"
    })
    yPos.current = -10
    
  }

  const laptop = () => {
    const keyboard = keyboardRef.current
    const screen = screenRef.current
    const wrap = wrapper.current
    
    gsap.to(group.current.scale, { 
      x: 1,
      y: 1,
      z: 1,
      duration: 2, 
      ease: "power4.out"
    })
    gsap.to(keyboard.scale, {
      x: Scale.base.x,
      y: Scale.base.y, 
      z: Scale.base.z,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.scale, {
      x: Scale.base.x,
      z: Scale.base.z,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.rotation, {
      z: -1.92,
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(wrap, {
      height: '720px',
      width: '800px',
      duration: 2,
      ease: "power4.out"
    })
    gsap.to(screen.children[0].scale, {
      y: 0.1,
      duration: 3,
      ease: "power4.out"
    })
    gsap.to(group.current.position, {
      z: 0,
      x: 0, 
      duration: 2, 
      ease: "power4.out"
    })
    yPos.current = -5

  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(time / 2) / 10 -0.05 , 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(time / 4) / 10 + 0.1, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(time / 4) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (yPos.current + Math.sin(time)) / 5, 0.1)

    if (mouse) {
      const device = group.current
      device.rotation.y = -mouse.x
    }

  })
  
  console.log(screenRef.current);
  
  return (
    <group ref={group} scale={0} onPointerMissed={() => {
      leaveIt()
    }} onClick={laptop} {...props} dispose={null}>
      <mesh
        ref={keyboardRef}
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[1.24, 0, 0]}
        scale={[1.24, 0.04, 1.77]}
      />
      <mesh
        ref={screenRef}
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[1.24, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[1.24, 0.04, 1.77]}
      >
        <Html scale={[0.1, 0.1, 0.1]} rotation={[1.92, 0, Math.PI/2]} transform occlude position={[-1, -0.01725416630525, 0]}>
          <DeviceContent />
        </Html>
      </mesh>
    </group>
  )
}

useGLTF.preload('/device.glb')
