import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import TicketViewCard from "./components/TicketViewCard";
import JoinTheResistance from "./components/JoinTheResistance";
import EventsSection from "./components/EventsSection";
import Home from "./pages/Home";
import VenueDetail from "./pages/VenueDetail";

function App() {
  const [showCTAOnly] = useState(false); // toggle this for dev/test/demo

  if (showCTAOnly) {
    return <JoinTheResistance />;
  }

  return (
    <>
      <Navbar />
      <Home />
      <EventsSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicketViewCard" element={<TicketViewCard />} />
        <Route path="/venues/:slug" element={<VenueDetail />} />
      </Routes>
    </>
  );
}

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

export default App;
