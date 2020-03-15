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
          <meta name="og:title" content="Shishir 2020" />
          <meta name="description" content="Shishir - NIT Meghalaya's Cultural Festival is back in 2020! Let's enjoy the festive atmosphere. Sing and dance to your heart's content! Many exciting events and competitions to be held. New Experiences to be made. Don't miss it!" />
          <meta name="og:description" content="Shishir - NIT Meghalaya's Cultural Festival is back in 2020! Let's enjoy the festive atmosphere. Sing and dance to your heart's content! Many exciting events and competitions to be held. New Experiences to be made. Don't miss it!" />
          <meta name="subject" content="NIT Meghalaya's Cultural Festival" />
          <meta name="copyright" content="NIT Meghalaya" />
          <meta name="robots" content="index,follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Nav />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
