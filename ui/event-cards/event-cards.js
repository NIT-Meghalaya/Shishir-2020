import React from 'react';
import EventCard from '../event-card/event-card';
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
    return (
      <div className="container">
        <section className="events-section">
          {
            events.forEach((event, index) => {
          return (
                <EventCard key={index+1} event={event}></EventCard>
              )
            })
         }
          
        </section>
        
      </div>
    )
  }
}

export default EventCards;