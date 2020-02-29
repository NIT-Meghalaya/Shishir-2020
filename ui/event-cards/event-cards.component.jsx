import React from 'react';
import EventCard from './../event-card/event-card.component';
import EVENT_DETAILS from './details';

class EventCards extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      events:EVENT_DETAILS
    }
  }
  
  render() {
    const { events } = this.state;
    // console.log(events);
    return (
      <div className="container">
        <section className="events-section">
         
          
        </section>
        <EventCard></EventCard>
      </div>
    )
  }
}

export default EventCards;