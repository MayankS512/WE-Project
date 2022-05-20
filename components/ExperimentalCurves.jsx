import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
motion

const ExperimentalCurves = () => {
  const vid = useRef(null)
  useEffect(() => {
    const unsub = setInterval(() => {
      if (vid) vid.current.play()
      if (vid.current.currentTime != 0) return () => unsub();
    }, 500)

    return () => unsub()
  }, [])
  return (
      <div className='blur-[100px] mix-blend-lighten -z-20 fixed top-0 left-0 w-screen h-screen'>
        <motion.video ref={vid} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4, delay: 0.5}} disablePictureInPicture disableRemotePlayback preload="auto" src="/test60.mp4" autoPlay loop />
      </div>
  )
}

export default ExperimentalCurves