// src/components/EventsSection.jsx
import { Link } from "react-router-dom";
import "../styles/components/eventsSection.css";
import EventCard from "./EventCard";
import Navbar from './Navbar'


const EventsSection = () => {

  return (
    <section>
      <Navbar />
      <br></br>
      <br></br>
      <h2> Upcoming Events</h2>
      <div>
        <nav>
          <Link to='/Home'>
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
