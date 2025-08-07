import { useParams } from "react-router-dom";
import { deslugify } from "../utils/slugify";

const VenueDashboard = () => {
  const { slug } = useParams();
  const venueName = deslugify(slug);

  const storedClicks =
    JSON.parse(localStorage.getItem("venue_directions_clicks")) || [];

  const filtered = storedClicks.filter(
    (entry) => entry.venue.toLowerCase() === venueName.toLowerCase()
  );

  return (
    <section>
      <h1>🎟️ Analytics for {venueName}</h1>
      <p>
        Total Directions Clicks: <strong>{filtered.length}</strong>
      </p>

      <ul>
        {filtered.map((entry, i) => (
          <li key={i}>
            {new Date(entry.timestamp).toLocaleString()} —{" "}
            <a href={entry.url} target="_blank" rel="noreferrer">
              View Click
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VenueDashboard;
