import Head from "next/head";
import Navbar from "../../components/Navbar";

// Connect with firebase and add some data
const data = [1, 2, 3, 4]

const Page = () => {
  return ( 
    <div className="absolute top-0 w-full h-full overflow-x-hidden dark:text-white dark:selection:bg-pink-700 selection:bg-red-500">
    <Head>
      <title>Rudiment.</title>
    </Head>

    <Navbar />
    <h1 className="mt-40 text-4xl text-center sm:text-5xl md:text-6xl">Release Notes</h1>
    <div className="flex flex-col gap-5 mx-5 mt-12 mb-12 xl:gap-12 md:gap-10 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">
      {data.map((val, i) => (
        <div key={i} className="p-10 rounded-md opacity-80 bg-neutral-100 dark:bg-zinc-700">
        <h2>Rudiment defines the first, rudimentary steps, into the public.</h2>
        </div>
      ))}
    </div>
  </div> 
   );
}
 
export default Page;