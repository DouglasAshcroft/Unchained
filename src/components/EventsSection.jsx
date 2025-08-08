// src/components/EventsSection.jsx
import { Link } from "react-router-dom";
import "../styles/components/eventsSection.css";
import EventCard from "./EventCard";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { APIContext } from "./ApiFetch";

const EventsSection = () => {
  const { events, inputVal } = useContext(APIContext);
  console.log(events);

  const filteredSearch = events.filter((event) => {
    event.title.toLowerCase().includes(inputVal);
  });
  console.log(filteredSearch);

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
