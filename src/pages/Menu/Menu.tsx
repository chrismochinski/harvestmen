import "./Menu.scss";
import ferris from "../../pages/Home/ferris-1.png";

export function Menu() {
  return (
    <div className="menu">
      <img className="ferrisWheel" src={ferris} alt="Floating Ferris Wheel Logo" />
      <div className="titleMenuWrapper">
        <div id="harvestmen-button" role="button">
          <h1 className="crimson-text">Harvestmen</h1>
        </div>
      </div>
    </div>
  );
}
