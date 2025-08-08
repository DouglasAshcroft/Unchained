import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import QRCodes from "./QRCodes";
import { APIContext } from "./ApiFetch";

export default function TicketViewCard() {
  const { events } = useContext(APIContext);

  const { title } = useParams();

  console.log(typeof title);

  if (!events) return <div>↺ Loading...</div>;

  const filterEvents = title
    ? events.filter((event) => event.title === title)
    : events;

  return (
    <>
      <div>
        {filterEvents.map((event) => (
          <div className="event-card">
            <img src={event.thumbnail || event.image} alt={event.title} />
            <h2>{event.title}</h2>
            <p>{event.date.when}</p>
            <br />
            <QRCodes />
          </div>
        ))}
      </div>
    </>
  );
}
