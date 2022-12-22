import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { GlobalStyles } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trips</title>

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />

        <meta name="description" content="A project to show my trips" />
      </Head>
      <GlobalStyles />
      <NextNProgress
        color="#f231a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}
