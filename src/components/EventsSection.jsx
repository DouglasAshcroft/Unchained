// src/components/EventsSection.jsx
import { useContext } from "react";
import { slugify } from "../utils/slugify";
import { Link } from "react-router-dom";
import { openGoogleMaps } from "../utils/openGoogleMaps";
import "../styles/components/eventsSection.css";
import { APIContext } from "./ApiFetch";

const EventsSection = () => {

  const { events } = useContext(APIContext);

  return (
    <section>
      <div>
        <nav>
          <Link to='/Home'>
            <h3>Home</h3>
          </Link>
        </nav>
      </div>

      <h2> Upcoming Events</h2>


      <div className="event-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.thumbnail || event.image} alt={event.title} />
            <h2>{event.title}</h2>
            <p>{event.date.when}</p>
            <div className="event-venue-row">
              <p>
                <a
                  href={`/venues/${slugify(event.venue.name)}`}
                  className="venue-internal-link"
                >
                  {event.venue?.name}
                </a>
              </p>
              <div className="maps-link-wrapper">
                <button
                  onClick={() => openGoogleMaps(event.event_location_map.link)}
                  className="directions-button"
                >
                  <img
                    src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
                    alt="Google Maps"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginRight: "6px",
                    }}
                  />
                  Directions
                </button>
              </div>
            </div>

            <div className="event-buttons">
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-details-button"
              >
                View Details
              </a>

              <button
                onClick={() => alert("NFT ticketing not available yet.")}
                className="mint-ticket-button"
              >
                Purchase NFT Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default EventsSection;
