import fetch from 'isomorphic-unfetch';
import absoluteUrl from '../../lib/absolute_url';
import Card from '../../ui/content-card/content-card';
import Overlay from '../../ui/overlay/overlay';
import '../../public/styles/events.scss';


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
                    <div onClick={() => this.setDay(day.events)}>
                      <Card
                        title={"Day " + day.day}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="event-container">
            {this.state.day.map((event, index) => {
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
    }
  }

}



export default Events;
