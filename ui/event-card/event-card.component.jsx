import React from 'react';
import './event-card.styles.scss';

const EventCard = ({name,...otherProps}) => (
  <div className="card">
    <div className="card__side ">
      <div className="card__picture">
        &nbsp;
      </div>
      <h4 className="card__heading">
        <span className="card__heading-span">{name}</span>
      </h4>
      <div className="card__details">
        <ul>
          <li>3 day tours</li>
          <li>Up to 30 people</li>
          <li>2 tour guides</li>
          <li>Sleep in cozy hotels</li>
          <li>Difficulty: easy</li>
        </ul>
      </div>
    </div>
  </div>
)

export default EventCard;