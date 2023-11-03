import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
  <>
    <Head>
      <title>Multi Step Form</title>
      <link rel="icon" href="/assets/images/icon-checkmark.svg" sizes="any" />
    </Head>
    <Component {...pageProps} />
  </>)
}
