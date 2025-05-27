import '@/styles/bootstrap.min.css';
import '@/styles/font-awesome.min.css';
import '@/styles/slick.css';
import '@/styles/slick-theme.css';
import '@/styles/animate.min.css';
import '@/styles/style.css';
import '@/styles/responsive.css';
{
  /*
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
  */
}  
import Layout from '../components/Layout'

import { CookiesProvider } from 'react-cookie';
import Head from 'next/head';

export default function App({ Component, pageProps }) {   
  return <>
      <Head>
      <meta name="keywords" content="Business Needs Inc" />
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>

  <Layout>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  </Layout>
  </>
}


