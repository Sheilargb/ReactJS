import "./parallax.css";
import fondo from "./assets/parallax.jpg";

function Parallax(){
  return(
    <div
      className="parallax"
      style={{ backgroundImage: `url(${fondo})` }}
    >
    </div>
  )
}

export default Parallax;
