import React from 'react';
import EventCard from '../event-card/event-card';

const EventCards = ({ events }) => (
  <div className="container">
    <section className="events-section">
      {
        events.forEach((event, index) => {
          return (
            <div>{event.title}</div>
            // <EventCard key={index + 1} title={event.title} desc={event.desc}></EventCard>
          )
        })
      }

    </section>

  </div>
)

export default EventCards;