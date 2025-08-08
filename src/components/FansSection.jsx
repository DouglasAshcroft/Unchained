import "../styles/components/joinTheResistance.css";

import UpComingEvents from "./FanSectionComponents/UpComingEvents";
import TrophyCollection from "./FanSectionComponents/TrophyCollection";
import FanFavs from "./FanSectionComponents/FanFavs";


function FansSection() {


  return (
    <div>
      <header>
        <h1>Fans</h1>
      </header>

      <main>
        <FanFavs />      

        <TrophyCollection />

        <UpComingEvents />
      </main>
    </div>
  );
}

export default FansSection;
