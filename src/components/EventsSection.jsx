// src/components/EventsSection.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { APIContext } from "./ApiFetch";
import "../styles/components/eventsSection.css";

import EventCard from "./EventCard";


const EventsSection = () => {
  const { events } = useContext(APIContext);


  return (
    <section>
      <br></br>
      <h2> Upcoming Events</h2>
      <div>
        <nav>
          <Link to="/Home">
            <h1>Home</h1>
          </Link>
        </nav>
      </div>
      <div>
        <EventCard />
      </div>
    </section>
  );
};
export default EventsSection;
