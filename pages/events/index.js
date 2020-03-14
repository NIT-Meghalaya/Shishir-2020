import '../../public/styles/events.scss';
import fetch from 'isomorphic-unfetch';
import absoluteUrl from '../../lib/absolute_url';
import Card from '../../ui/content-card/content-card';
import Overlay from '../../ui/overlay/overlay';
import Footer from '../../ui/footer/footer';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: [],
      event: {},
      isDay: false,
      isOverlay: false
    }
  }

  static async getInitialProps() {
    const path = "/json/events.json"
    const res = await fetch(absoluteUrl(path));

    const statusCode = res.status;
    const error = !(statusCode >= 200 & statusCode < 300);
    const events = error ? null : await res.json();
    return { error, statusCode, events };
  }

  setDay = (e) => {
    this.setState({
      isDay: true,
      day: e
    })
  }

  setEvent = (e) => {
    this.setState({
      isOverlay: true,
      event: e
    })
  }

  closeOverlay = (e) => {
    this.setState({
      isOverlay: false
    })
  }

  render() {
    if (this.props.error) {
      return statusCode;
    }

    if (this.state.isOverlay) {
      return (
        <div>
          <Overlay
            closeOverlay={() => this.closeOverlay()}
            event={this.state.event}
          />
        </div>
      )
    } else {
      return (
        <div className="event-page-container">
          <div className="event-header">
            <h1 className="heading">EVENTS</h1>
            <div className="day-container">
              {
                this.props.events.map((day, index) => {
                  return (
                    <div onClick={() => this.setDay(day.category)}>
                      <Card
                        title={"Day " + day.day}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="category-container">
            {
              this.state.day.map((category) => {
                return (
                  <div>
                    <h2>{category.title}</h2>
                    {
                      category.desc.map(desc => {
                        return (
                          <p>{desc}</p>
                        )
                      })
                    }
                    <div className="event-container">
                      {category.events.map((event) => {
                        return (
                          <div className="events"
                            onClick={() => this.setEvent(event)}
                          >
                            <Card
                              title={event.title}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            }
          </div>
          <Footer />
        </div>
      );
    }
  }

}



export default Events;
