import { motion } from "framer-motion";

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
    width: 768,
    height: 710,
  },
  phone: {
    width: 710,
    height: 750
  }
}

const DeviceContent = () => {
  return (
    <motion.iframe 
      variants={deviceVariants}
      animate="laptop"
      initial="initial"
      src="https://rudiment.vercel.app/login" 
    />
   );
}
 
export default DeviceContent;

    // <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white pointer-events-none bg-slate-900">
    //     <h1 className="text-4xl">Hello Demon!</h1>
    // </div>