import { motion } from 'framer-motion'

const ExperimentalCurves = () => {
  return (
      <div className='blur-[100px] dark:mix-blend-lighten mix-blend-exclusion -z-20 fixed top-0 left-0 w-screen h-screen'>
        <motion.video initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4, delay: 0.5}} disablePictureInPicture disableRemotePlayback preload="auto" muted src="/test60.mp4" className='object-fill w-[1000px] h-[1000px] sm:w-fit sm:h-fit' autoPlay loop />
      </div> 
  )
}

export default ExperimentalCurves