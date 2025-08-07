import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function TicketViewCard() {
  const [ticketData, setTicketData] = useState(null);

  let { id } = useParams();

  if (!ticketData) return <div>↺ Loading...</div>;

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTicketData(data);
      });
  }, [id]);

  return <></>;
}
