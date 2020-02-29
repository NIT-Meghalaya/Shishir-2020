import App from "next/app";
import Nav from "../ui/nav/nav";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Nav />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
