import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
			<Component {...pageProps} />
		</Layout>
  )
  return 
}

export default MyApp
