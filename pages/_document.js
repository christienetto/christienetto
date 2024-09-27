import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Your Website Title" />
          <meta property="og:description" content="Your custom description." />
          <meta property="og:image" content="URL to your image" />
          <meta property="og:url" content="Your website URL" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Your Website Title" />
          <meta name="twitter:description" content="Your custom description." />
          <meta name="twitter:image" content="URL to your image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
