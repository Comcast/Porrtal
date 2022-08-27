import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to porrtal-app!</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
        />
        {/* <link
          rel="stylesheet"
          href="https://js.arcgis.com/4.24/esri/themes/light/main.css"
        /> */}
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
