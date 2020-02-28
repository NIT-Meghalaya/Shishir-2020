import fetch from "isomorphic-unfetch";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 80%;
  margin: 0 auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <h1>Hello World</h1>
      </Container>
    );
  }
}

App.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default App;
