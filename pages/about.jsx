import Head from "next/head";
import Navbar from "../components/Navbar";

const About = () => {
  return ( 
  <div className="absolute top-0 w-full h-full overflow-x-hidden ">
    <Head>
      <title>Rudiment.</title>
    </Head>

    <Navbar />
    <h1 className="mt-40 text-6xl text-center">About</h1>
  </div> 
  );
}
 
export default About;