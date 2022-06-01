import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
// DONE: Add something here too BUT could be better.

const About = () => {
  return (
    <div className="w-full h-full overflow-y-auto none dark:selection:bg-pink-700 selection:bg-red-500 ">
      <Head>
        <title>Rudiment.</title>
      </Head>

      <Navbar />
      <h1 className="mt-40 text-4xl text-center sm:text-5xl md:text-6xl">
        About
      </h1>
      <div className="flex p-10 mx-5 mt-12 rounded-md sm:mx-10 md:mx-20 lg:mx-40 xl:mx-96 opacity-80 bg-neutral-100 dark:bg-zinc-700">
        <img style={{height:200, width:300}} src="/rudiment.png"/>
        <h2 className="ml-10 text-justify">
         The first page of the website is a landing page where user can view 
          blogs (new updates) , about page (description about the website),
          laptop model in which by clicking try it button user can interact with 
          the website in laptop , tablet , phone view and the last is the login / 
          signup where new users can signup for the website and old ones can login to
          enjoy the features of the website. 
        </h2>

        {/* <Image src=""></Image> */}
      </div>
      <div className="flex p-10 mx-5 mt-12 rounded-md sm:mx-10 md:mx-20 lg:mx-40 xl:mx-96 opacity-80 bg-neutral-100 dark:bg-zinc-700">
        <h2 className="mr-10 text-justify">
          The purpose of this project is to design a chat application, also
          known as a instant messaging system. The main purpose of the software
          is to provide users with an instant messaging tool that has the
          ability to handle millions of users simultaneously when needed and can
          be easily done. The application is designed as a web application. It
          provides a general architecture for chat applications, and anyone or
          organization can use it as the basis for providing instant messaging
          capabilities.
        </h2>
        <img style={{height:200, width:300}} src="/rudiment1.png"/>
        {/* <Image src="/rudiment.png" height={927} width={1862}></Image> */}
      </div>
      <div className="flex p-10 mb-12 mx-5 mt-12 rounded-md sm:mx-10 md:mx-20 lg:mx-40 xl:mx-96 opacity-80 bg-neutral-100 dark:bg-zinc-700">
        <img style={{height:200, width:300}} src="/rudiment2.png"/>
        <h2 className="ml-10 text-justify">
        A dark theme displays dark surfaces across the majority of a UI. 
        It's designed to be a supplemental mode to a default (or light) theme. 
        Our site provides theme feature for users
        </h2>

        {/* <Image src=""></Image> */}
      </div>
    </div>
  );
};

export default About;
