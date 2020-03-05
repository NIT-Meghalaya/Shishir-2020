import React from 'react';
import EventCard from '../event-card/event-card';

const EventCards = ({ events }) => (
  <div className="container">
    <section className="events-section">
      {
        events.forEach((event, index) => {
          return (
            <EventCard key={index + 1} event={event}></EventCard>
          )
        })
      }

    </section>

  </div>
)

export default EventCards;