import { Footer } from "../Footer";
import "./Home.scss";
import ferris from "./ferris-1.png";

export function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeBackgroundWrapper background section first">
        <div className="homePaddingWrapper">
          <div className="homeContentWrapper">
            <div id="harvestmen-button" role="button">
              <h1>Harvestmen</h1>
            </div>
          </div>
          <div className="imageWrapper">
            <img className="ferrisWheel" src={ferris} alt="Floating Ferris Wheel Logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
