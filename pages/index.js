import fetch from "isomorphic-unfetch";
import "../public/static/styles/index.scss";
import Header from '../ui/header/header';
import SecondaryHeading from '../ui/secondary-heading/secondary-heading';
import AboutUs from '../ui/about-us/about-us.component';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <SecondaryHeading title="About Us" />
        <AboutUs/>
        <SecondaryHeading title="Events" />
        <SecondaryHeading title="Gallery" />
        <SecondaryHeading title="Contact Us" />
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
