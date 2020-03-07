import EventCard from "../event-card/event-card";

const EventCards = ({ events }) => (
  <div className="container">
    <section className="events-section">
      {events.map((event, index) => {
        console.log(event);
        return <EventCard key={index + 1} event={event}></EventCard>;
      })}
    </section>
  </div>
);

export default EventCards;
