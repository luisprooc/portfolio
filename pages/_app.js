import 'nextra-theme-blog/style.css';
import Head from 'next/head';

import '../styles/main.css';
import '../styles/home.css';

import '../styles/skills.css';
import '../styles/education.css';

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
