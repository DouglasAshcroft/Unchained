import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/global.css";

// import Home from "./pages/Home";
// import VenueDetail from "./pages/VenueDetail";
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
        <Route path="/TicketViewCard" element={<TicketViewCard />} />
        {/* <Route path="/venues/:slug" element={<VenueDetail />} /> */}
        <Route path="/Home/Venues" element={<VenuesSection />} />
        <Route path="/Home/Fans" element={<FansSection />} />
        <Route path="/Home/TicketView" element={<TicketViewCard />} />
      </Routes>
    </>
  );
}

export default App;
