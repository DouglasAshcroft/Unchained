import { NavLink, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { pathname } = useLocation();

  // Hide navbar on /join per design spec
  if (pathname === "/join") return null;

  const linkClass = ({ isActive }) =>
    isActive
      ? "navlink navlink--active u-stencil-ring"
      : "navlink u-stencil-ring";

  return (
    <div className="navbar u-noise">
      <Link
        to="/"
        className="navbar__brand u-stencil-ring"
        aria-label="Unchained Home"
      >
        Unchained
      </Link>

      <nav className="navbar__links" aria-label="Primary">
        <NavLink to="/Home" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/Home/Artists" className={linkClass}>
          Artists
        </NavLink>
        <NavLink to="/Home/Venues" className={linkClass}>
          Venues
        </NavLink>
        <NavLink to="/Home/Fans" className={linkClass}>
          Fans
        </NavLink>
        <NavLink to="/join" className={linkClass}>
          Join
        </NavLink>
      </nav>

      <div className="navbar__search">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;

// restore below if doesnt fix bug
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import ArtistsSection from "./ArtistsSection";
// import VenuesSection from "./VenuesSection";
// import FansSection from "./FansSection";
// import "../styles/components/navbar.css";

// const Navbar = () => {
//   const artistNavigate = useNavigate("/Home/Artists");
//   const venuesNavigate = useNavigate("/Home/Venues");
//   const fansNavigate = useNavigate("/Home/Fans");
//   const homeNavigate = useNavigate("/Home");

//   return (
//     <div className="navbar">
//       <header>
//         <h2>Unchained</h2>
//       </header>
//       <nav className="navbar__links">
//         <button onClick={() => homeNavigate("/Home")}>Home</button>
//         &nbsp;
//         <button onClick={() => artistNavigate("/Home/Artists")}>Artists</button>
//         &nbsp;
//         <button onClick={() => venuesNavigate("/Home/Venues")}>Venues</button>
//         &nbsp;
//         <button onClick={() => fansNavigate("/Home/Fans")}>Fans</button>&nbsp;
//         <div className="navbar__search">
//           <SearchBar />
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
