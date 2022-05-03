import '../styles/globals.css'
import AuthWrapper from '../context/auth.js';

function MyApp({ Component, pageProps }) {
  return  (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  )
}

export default MyApp
