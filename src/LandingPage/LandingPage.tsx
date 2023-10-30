import { useEffect } from "react";
import { IntroSvg } from "../IntroSvg";
import "./LandingPage.scss";

function App() {
  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      const drawPaths = document.getElementById(i.toString());
      if (drawPaths instanceof SVGPathElement) {
        const path = drawPaths as SVGPathElement;
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length} ${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.getBoundingClientRect(); // Trigger a reflow to make sure styles are applied

        path.animate([{ strokeDashoffset: `${length}` }, { strokeDashoffset: "0" }], {
          // timing options
          duration: 4500,
          delay: (i - 0.2) * 1600, // Delay each path by 2 seconds
          fill: "forwards", // Retain the style values at the end of the animation
        });
        setTimeout(() => {
          const elem = document.getElementById("title");
          if (elem) {
            elem.classList.add("animate-in");
          }
        }, 7210);
      }
    }
    const wrapper = document.getElementById("app-wrapper");
    if (wrapper) {
      wrapper.style.backgroundColor = "#525e72";
      wrapper.getBoundingClientRect(); // Trigger a reflow to make sure styles are applied
      setTimeout(() => {
        wrapper.style.transition = "background-color 3300ms ease-in-out";
        wrapper.style.backgroundColor = "#252c37";
      }, 0);
    }
    const image = document.getElementById("image0_436_92");
    if (image) {
      // image.style.transform = "scale(1.1)";
      image.getBoundingClientRect(); // Trigger a reflow to make sure styles are applied
      setTimeout(() => {
        image.style.transition = "filter 5300ms ease-in-out 1000ms";
        image.style.filter = "blur(0px)";
        image.style.transform = "scale(1)"; // end scale
      }, 0);
    }
  }, []);

  return (
    <div className="App" id="app-wrapper">
      <div className="container">
        <IntroSvg />
        <h1 id="title">harvestmen</h1>
      </div>
      <p id="coming-soon">coming soon</p>
    </div>
  );
}

export default App;
