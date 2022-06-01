import Head from "next/head";
import Navbar from "../../components/Navbar";

// Connect with firebase

const Page = () => {
  return ( 
    <div className="absolute top-0 w-full h-full overflow-x-auto none dark:text-white dark:selection:bg-pink-700 selection:bg-red-500">
    <Head>
      <title>Rudiment.</title>
    </Head>

    <Navbar />
    <h1 className="mt-40 text-4xl text-center sm:text-5xl md:text-6xl">Release Notes</h1>
    <div className="flex flex-col gap-5 mx-5 mt-12 mb-12 xl:gap-12 md:gap-10 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">
      {/* {data.map((val, i) => (
        <div key={i} className="p-10 rounded-md opacity-80 bg-neutral-100 dark:bg-zinc-700">
        <h2>Rudiment defines the first, rudimentary steps, into the public.</h2>
        </div>
      ))} */}
      <div className="p-10 rounded-md opacity-80 bg-neutral-100 dark:bg-zinc-700">
        <h2 className="text-4xl font-bold">Future Work</h2>
        <p>Certain features that have become commonplace in chat apps such as File Sharing, Voice Calls, Video Calls, and more are still missing from Rudiment. A lot of our future work will be related to the implementation of these features and fleshing out other, already implemented features, like the group joining process mentioned in the previous post, as well as certain other performance pitfalls.</p>
      </div>
      <div className="p-10 rounded-md opacity-80 bg-neutral-100 dark:bg-zinc-700">
        <h2 className="text-4xl font-bold">First Push</h2>
        <p>The first working version of Rudiment is finally live with regular chat functionality as well as group functionality, though the process of joining a group can certainly be worked upon further to improve the UX for the users.</p>
      </div>
      <div className="p-10 rounded-md opacity-80 bg-neutral-100 dark:bg-zinc-700">
        <h2 className="text-4xl font-bold">Init</h2>
        <p>The start of a new, minimal chat app that does not try to do anything more than it is supposed to. The website however, does go above and beyond to attract users and then... inevitably disappoint them with the lack of features...</p>
      </div>
    </div>
  </div> 
   );
}
 
export default Page;