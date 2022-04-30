import Head from "next/head";
import Navbar from "../../components/Navbar";

const Page = () => {
  return ( 
    <div className="absolute top-0 w-full h-full overflow-x-hidden dark:text-white">
    <Head>
      <title>Rudiment.</title>
    </Head>

    <Navbar />
    <h1 className="mt-40 text-6xl text-center">Release Notes</h1>
  </div> 
   );
}
 
export default Page;