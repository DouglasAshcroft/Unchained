import { APIContext } from "./ApiFetch";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { slugify } from "../utils/slugify";
import { openGoogleMaps } from "../utils/openGoogleMaps";

import "../styles/components/eventsSection.css";



export default function EventCard() {
    const { events } = useContext(APIContext);
    const ticketViewNavigate = useNavigate("/Home/Events/TicketView");


    return (

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
                            onClick={() => ticketViewNavigate('/Home/Events/TicketView')}
                            className="mint-ticket-button"
                        >
                            Purchase NFT Ticket
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}