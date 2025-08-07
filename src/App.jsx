import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/global.css";
import TicketViewCard from "./components/TicketViewCard";
import JoinTheResistance from "./components/JoinTheResistance";
import EventsSection from "./components/EventsSection";
import Home from "./pages/Home";
import VenueDetail from "./pages/VenueDetail";

function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<JoinTheResistance />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Home/Events" element={<EventsSection/>} />
        <Route path="/TicketViewCard" element={<TicketViewCard />} />
        <Route path="/venues/:slug" element={<VenueDetail />} />
      </Routes>
    </>
  );
}

export default App;