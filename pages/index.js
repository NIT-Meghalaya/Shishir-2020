import fetch from "isomorphic-unfetch";
import "../public/styles/index.scss";
import Header from '../ui/header/header';
import SecondaryHeading from '../ui/secondary-heading/secondary-heading';
import AboutUs from '../ui/about-us/about-us';
import EventsSection from '../ui/events-section/events-section';
import CelebrityGallery from '../ui/celebrity-gallery/celebrity-gallery';
import Footer from '../ui/footer/footer';



import absoluteUrl from './../lib/absolute_url';
import '../public/events.json'


const App = ({ events }) => (
  <React.Fragment>
    <Header />
    <SecondaryHeading title="About" />
    <AboutUs />
    <SecondaryHeading title="Events" />
    <EventsSection/>
    <SecondaryHeading title="Celebrities" />
    <CelebrityGallery/>
    <SecondaryHeading title="Contact" />
    <Footer />
  </React.Fragment>
);

App.getInitialProps = async () => {
  const path = "/events.json"
  const res = await fetch(absoluteUrl(path));
  const events = await res.json();
  return { events };
};

export default App;
