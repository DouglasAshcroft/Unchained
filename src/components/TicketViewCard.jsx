import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import { APIContext } from "./ApiFetch";

export default function TicketViewCard() {

    const { events } = useContext(APIContext);

    return (
        <>
            {/* {events.map((event) => {
                <>
                    <h1>{event.title}</h1> <br />
                    <h3>Start Date: {event.date.start_date}</h3>
                </>
            })} */}


            <div>
                    <div key={index} className="event-card">
                        <img src={events.thumbnail || events.image} alt={events.title} />
                        <h2>{events.title}</h2>
                        <p>{events.date.when}</p>
                    </div>
            </div>

        </>
    )
}

