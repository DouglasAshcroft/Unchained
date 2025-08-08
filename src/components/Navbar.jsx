import { NavLink, Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import ArtistsSection from "./ArtistsSection";
import VenuesSection from "./VenuesSection";
import FansSection from "./FansSection";
import "../styles/components/navbar.css";

const Navbar = () => {
  const artistNavigate = useNavigate("/Home/Artists");
  const venuesNavigate = useNavigate("/Home/Venues");
  const fansNavigate = useNavigate("/Home/Fans");
  const homeNavigate = useNavigate("/Home");

  return (
    <div className="navbar">
      <header>
        <h2>Unchained</h2>
      </header>
      <nav className="navbar__links">
        <button onClick={() => homeNavigate("/Home")}>Home</button>
        &nbsp;
        <button onClick={() => artistNavigate("/Home/Artists")}>Artists</button>
        &nbsp;
        <button onClick={() => venuesNavigate("/Home/Venues")}>Venues</button>
        &nbsp;
        <button onClick={() => fansNavigate("/Home/Fans")}>Fans</button>&nbsp;
        <div className="navbar__search">
          <SearchBar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
