import { useNavigate } from "react-router-dom";



function Navbar() {

  const homeNavigate = useNavigate("/Home")
  const artistNavigate = useNavigate("/Home/Artists");
  const venuesNavigate = useNavigate("/Home/Venues");
  const fansNavigate = useNavigate("/Home/Fans");

  return (
    <span>
      <h2>Unchained</h2>
      <nav className="navbar">
        <button onClick={() => homeNavigate("/Home")}>Home</button> &nbsp;
        <button onClick={() => artistNavigate("/Home/Artists")}>Artists</button> &nbsp;
        <button onClick={() => venuesNavigate("/Home/Venues")}>Venues</button> &nbsp;
        <button onClick={() => fansNavigate("/Home/Fans")}>Fans</button>
      </nav>
    </span>
  );
}

export default Navbar;
