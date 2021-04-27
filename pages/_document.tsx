import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=DM+Sans&family=Source+Serif+Pro:wght@900&display=swap"
            rel="stylesheet"
          />
          <link href="/themes/prism.css" rel="stylesheet" />
        </Head>
        <body className="container min-h-screen bg-white-primary dark:bg-black-primary">
          <Main />
          <NextScript />
          <script src="/prism.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
