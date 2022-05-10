import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ home, redirect }) => {
  const router = useRouter()
  
  return ( 
  <nav className="mt-10 mr-16 text-xl ">
    <ul className="flex items-center gap-44">
      {!home && <li className="ml-16 text-4xl font-Cinzel"><Link href='/home'>Rudiment.</Link></li>}
      {home && <li className="ml-auto cursor-pointer" onClick={() => redirect('blog')}>Blog</li>}
      {!home && <li className="ml-auto"><Link href="/blog">Blog</Link></li>}
      {home && <li className="cursor-pointer" onClick={() => redirect('about')}>About</li>}
      {!home && <li><Link href="/about">About</Link></li>}
      {/* {home && <li><button onClick={() => redirect('login')} className="px-6 py-2 text-xl transition-all duration-500 rounded shadow hover:shadow-lg hover:shadow-indigo-900 shadow-indigo-900 bg-gradient-to-tr from-indigo-800 to-violet-300">Login</button></li>} */}
      {/* {!home && <li><button onClick={() => router.push('/login')} className="px-6 py-2 text-xl transition-all duration-500 rounded shadow hover:shadow-lg hover:shadow-indigo-900 shadow-indigo-900 bg-gradient-to-tr from-indigo-800 to-violet-300">Login</button></li>} */}
      <li><button onClick={() => router.push('/login')} className="px-6 py-2 text-xl transition-all duration-500 rounded shadow hover:shadow-lg hover:shadow-indigo-900 shadow-indigo-900 bg-gradient-to-tr from-indigo-800 to-violet-300">Login</button></li>
    </ul>
  </nav>
  );
}
 
export default Navbar;