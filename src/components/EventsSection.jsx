// src/components/EventsSection.jsx
import { useEffect, useState } from "react";
import { slugify } from "../utils/slugify";
import { openGoogleMaps } from "../utils/openGoogleMaps";
import "../styles/components/eventsSection.css";

// Not needed mocking data in server
// const EventsSection = () => {
//   const apiKey =
//     "89851f15ae5cae03c281a8eb7e5dfc64485b8aca245d1c61d8ce7373f5634803";
//   const params = {
//     engine: "google_events",
//     q: "Washington DC events",
//     hl: "en",
//     gl: "us",
//     tbs: "lf:1,lf_ui:2",
//     num: 25,
//     api_key: apiKey,
//   };

// const url = `https://serpapi.com/search.json?${new URLSearchParams(params)}`;
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     const events = data.event_results;
//     console.log(data.events_results);
//   });

// useEffect(() => {
//   fetch();
// }, []);
const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`http://localhost:3001/googleEvents`);
        const data = await res.json();

        if (data.events_results) {
          setEvents(data.events_results.slice(0, 10));
          // setEvents(events.slice(0, 10)); // limit to 10
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.error("Error fetching Google events:", err);
        setError("Could not load events from Google.");
      }
    };
    fetchEvents();
  }, []);

  return (
    <section>
      <h2> Upcoming Events</h2>

      {error && <p>{error}</p>}

      {!error && events.length === 0 && <p>No events available right now.</p>}

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

// single call (async/await)
// const json = await getJson({ engine: "google", api_key: API_KEY, q: "coffee" });

// const EventsSection = () => {
//   const [events, setEvents] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         `url`
//       );
//       const data = await res.json();

//       if (data._embedded?.events) {
//         setEvents(data._embedded.events);
//       } else {
//         setEvents([]);
//       }
//     } catch (err) {
//       console.error("Error fetching events:", err);
//       setError("Could not load events");
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);
// }
