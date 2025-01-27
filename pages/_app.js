import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Site en cours de construction</title>
      </Head>
      {/* 
      <Component {...pageProps} />
      */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '1.5rem',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}
      >
        Site en cours de construction
      </div>
    </>
  );
}

export default App;

