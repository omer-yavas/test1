import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <div id="myportal" /> {/* Our portal is here */}
        <NextScript />
      </body>
    </Html>
  );
}
