import App from "next/app";
import Head from "next/head"
import Nav from "../ui/nav/nav";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Shishir 2020</title>
          <meta name="description" content="Shishir - NIT Meghalaya's Cultural Festival is back in 2020! Let's enjoy the festive atmosphere and sing and dance to our heart's content! Don't miss it!" />
        </Head>
        <Nav />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
