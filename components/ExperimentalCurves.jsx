import { motion } from 'framer-motion'
import React from 'react'
motion

const ExperimentalCurves = () => {
  return (
    <motion.video initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4, delay: 0.5}} src="/test.mp4" playsInline autoPlay loop height="100%" className="fixed top-0 left-0 -z-10 mix-blend-lighten blur-[100px]"/>
  )
}

export default ExperimentalCurves