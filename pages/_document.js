import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="description" content="Landing page for all web apps made by Luchian Emil as a full stack web developer"/>
            <meta name="author" content="Luchian Emil"/>
            <meta name="keywords" content="next.js, react, web app, portfolio, Luchian Emil"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css" />
            <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js"></script>

        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument