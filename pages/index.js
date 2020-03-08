import fetch from "isomorphic-unfetch";
import "../public/styles/index.scss";
import LandingPage from '../ui/landing-page/landing-page';
import SecondaryHeading from '../ui/secondary-heading/secondary-heading';
import AboutUs from '../ui/about-us/about-us';
import EventsSection from '../ui/events-section/events-section';
import CelebrityGallery from '../ui/celebrity-gallery/celebrity-gallery';
import Map from '../ui/map/map';
import Footer from '../ui/footer/footer';




import absoluteUrl from './../lib/absolute_url';
import '../public/events.json'


const App = ({ events }) => (
  <React.Fragment>
    <LandingPage/>
    <SecondaryHeading title="About" />
    <AboutUs />
    <SecondaryHeading title="Events" />
    <EventsSection />
    <SecondaryHeading title="Celebrities" />
    <CelebrityGallery />
    <SecondaryHeading title="Visit Us" />
    <Map/>
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
