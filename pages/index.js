import fetch from "isomorphic-unfetch";

class App extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

App.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default App;
