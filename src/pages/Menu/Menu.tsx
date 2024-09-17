import { useState } from "react";
import "./Menu.scss";
import ferris from "../../pages/Home/ferris-1.png";

export function Menu() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    console.log("menu open clicked!");
    setMenuOpen(true);
  };

  return (
    <div className="menu">
      <img className={`ferrisWheel ${isHovered ? "hovered" : ""}`}
       src={ferris} alt="Floating Ferris Wheel Logo" />
      <div className="titleMenuWrapper">
        <div
          id="harvestmen-button"
          role="button"
          tabIndex={0}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleMenuOpen}>
          <h1 className="crimson-text">Harvestmen</h1>
        </div>
      </div>
    </div>
  );
}
