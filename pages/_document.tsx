import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body className="bg-black text-white">
          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
