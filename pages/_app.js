import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Confirmação de Presença - Vôlei</title>
        <style>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            overflow: hidden;
            background: #008080;
            font-family: Tahoma, "MS Sans Serif", Arial, sans-serif;
            font-size: 11px;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
