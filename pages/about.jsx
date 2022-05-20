import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ExperimentalCurves from "../components/ExperimentalCurves";

// DONE: Add something here too BUT could be better.

const About = () => {
  return ( 
  <div className="w-full h-full overflow-y-hidden ">
    <Head>
      <title>Rudiment.</title>
    </Head>

    {/* <Image src='/try.png' layout="fill" className="w-screen h-screen -z-10 mix-blend-lighten"/> */}
    {/* blur-[100px] mix-blend-lighten mix-blend-exclusion */}
    <ExperimentalCurves />
    <Navbar />
    <h1 className="mt-40 text-4xl text-center sm:text-5xl md:text-6xl">About</h1>
    <div className="p-10 mx-5 mt-12 rounded-md sm:mx-10 md:mx-20 lg:mx-40 xl:mx-96 bg-zinc-700">
      <h2>Rudiment defines the first, rudimentary steps, into the public.</h2>
    </div>

    
  </div> 
  );
}
 
export default About;