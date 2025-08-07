import { useParams } from "react-router-dom";

const VenueDetail = () => {
  const { slug } = useParams();

  return (
    <section>
      <h1>🕳️ Welcome to the Underground</h1>
      <p>
        This is a secure detail page for venue:{" "}
        <strong>{slug.replaceAll("-", " ")}</strong>
      </p>
      <p>More info about this venue will appear here soon.</p>
    </section>
  );
};

export default VenueDetail;
