import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Navbar from "./components/Navbar";

import TicketViewCard from "./components/TicketViewCard";
import JoinTheResistance from "./components/JoinTheResistance";
import EventsSection from "./components/EventsSection";
import VenuesSection from "./components/VenuesSection";
import FansSection from "./components/FansSection";
import ArtistsSection from "./components/ArtistsSection";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<JoinTheResistance />} />
        <Route path="/Home/" element={<EventsSection />} />
        <Route path="/Home/Artists" element={<ArtistsSection />} />
        {/* <Route path="/venues/:slug" element={<VenueDetail />} /> */}
        <Route path="/Home/Venues" element={<VenuesSection />} />
        <Route path="/Home/Fans" element={<FansSection />} />
        <Route path={`/Home/Events/TicketView/:title` } element={<TicketViewCard />} />
      </Routes>
    </>
  );
}

export default App;
