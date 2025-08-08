// src/components/JoinTheResistance.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/joinTheResistance.css";
import ArtistsCard from "../components/ArtistsCard";
import VenuesCard from "./VenuesCard";
import FansCard from "./FansCard";
import HandleEmail from "./HandleEmail";
import EventsSection from "./EventsSection";

const JoinTheResistance = () => {
  const artistNavigate = useNavigate("/Home/Artists");
  const venuesNavigate = useNavigate("/Home/Venues");
  const fansNavigate = useNavigate("/Home/Fans");

  const [showCTAOnly] = useState(true);

  if (showCTAOnly === false) {
    return <EventsSection />;
  }

  return (
    <section className="join-the-resistance">
      <header>
        <h1>Ready to join the Resistance?</h1>
        <p> Reward fans, Dismantle the monopoly, Unchain from the 🎟️ Master.</p>
      </header>

      <div className="audience-cards">
        <button onClick={() => artistNavigate("/Home/Artists")}>
          <ArtistsCard />
        </button>

        <button onClick={() => venuesNavigate("/Home/Venues")}>
          <VenuesCard />
        </button>

        <button onClick={() => fansNavigate("/Home/Fans")}>
          <FansCard />
        </button>
      </div>
      <div>
        <HandleEmail />
      </div>
    </section>
  );
};

export default JoinTheResistance;
