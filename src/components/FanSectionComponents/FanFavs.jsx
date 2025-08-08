import { useContext } from "react"
import { APIContext } from "../ApiFetch";

function FanFavs() {
    const { events } = useContext(APIContext);

    console.log(events)
    return (
        <>
            <section id="fans-fav">
                {events.map((event, index) => (
                    <div key={index} className="event-card">
                        <img src={event.thumbnail || event.image} alt={event.title} />
                        <h2>{event.title}</h2>
                        <button>Go To Event</button> {/* this button goes to EventCard */}
                    </div>))}
            </section>
        </>
    )
}

export default FanFavs;