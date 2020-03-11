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
        </Head>
        <Nav />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
