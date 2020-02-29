import fetch from "isomorphic-unfetch";
import "../public/static/styles/index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Hello World</h1>
        </div>
      </React.Fragment>
    );
  }
}

// App.getInitialProps = async ({ req }) => {
//   const res = await fetch("https://api.github.com/repos/zeit/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };

export default App;
