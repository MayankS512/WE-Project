import Navbar from "./Navbar";

const HomeContent = ({ tryIt }) => {  
  return ( 
  <div className="absolute top-0 w-full h-full overflow-x-hidden transition-all">
    <Navbar home />
    <div className="w-screen h-60 sm:h-72"></div>
    <p className="mt-4 text-4xl ml-7 sm:text-3xl sm:ml-24">A new way to communicate.</p>
    <button onClick={tryIt} className="px-6 py-2 mt-4  rounded ml-7 transition-all duration-300 dark:transition-none sm:mt-10 text-md sm:text-2xl sm:ml-24 dark:text-rose-700 hover:bg-[#2a2a2a] bg-[#1a1a1a] dark:hover:outline-rose-700 outline outline-0 dark:hover:outline-2 dark:bg-neutral-200 dark:hover:bg-neutral-200">Try It!</button>
  </div> 
  );
}
 
export default HomeContent;