import fetch from "isomorphic-unfetch";
import "../public/styles/index.scss";
import Header from '../ui/header/header';
import SecondaryHeading from '../ui/secondary-heading/secondary-heading';
import AboutUs from '../ui/about-us/about-us';
import EventCards from '../ui/event-cards/event-cards';
import absoluteUrl from './../lib/absolute_url';
import '../public/events.json'


const App = ({ events }) => (
  <React.Fragment>
    <Header />
    <SecondaryHeading title="About Us" />
    <AboutUs />
    <SecondaryHeading title="Events" />
    <EventCards events={events} />
    <SecondaryHeading title="Gallery" />
    <SecondaryHeading title="Contact Us" />
  </React.Fragment>
);

App.getInitialProps = async () => {
  const path = "http://localhost:3000/events.json"
  const res = await fetch(path);
  const events = await res.json();
  return { events };
};

export default App;
