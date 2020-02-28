import App from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Nav from "../ui/nav";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
