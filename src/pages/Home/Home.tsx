import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import "./Home.scss";
import ferris from "./ferris-1.png";

const cloudImages = [
  "cloud-0.png",
  "cloud-1.png",
  "cloud-2.png",
  "cloud-3.png",
  "cloud-4.png",
  "cloud-5.png",
  "cloud-6.png",
  "cloud-8.png",
];

interface Cloud {
  src: string;
  top: string;
  width: string;
  animationDuration: string;
  opacity: number;
  zIndex: number;
  id: string;
}

export function Home() {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    const generateCloud = (): Cloud => {
      const randomCloud = cloudImages[Math.floor(Math.random() * cloudImages.length)];
      const randomY = Math.random() * 34; // Random Y position in percentage
      const randomSize = Math.random() * (700 - 200) + 200; // Random size between 200px and 700px
      const randomSpeed = Math.random() * (90 - 30) + 30; // Random speed between 30s and 90s
      const randomOpacity = Math.random() * (0.7 - 0.1) + 0.1; // Random opacity between 0.1 and 0.7
      const randomZIndex = Math.floor(Math.random() * 3); // Random z-index between 0 and 2

      return {
        src: `/assets/clouds/${randomCloud}`,
        top: `${randomY}vh`,
        width: `${randomSize}px`,
        animationDuration: `${randomSpeed}s`,
        opacity: randomOpacity,
        zIndex: randomZIndex,
        id: Math.random().toString(36).substring(7),
      };
    };

    // Generate 5 clouds to start
    const newClouds = Array(5)
      .fill(null)
      .map(() => generateCloud());
    setClouds(newClouds);

    // Generate clouds continuously with random pauses
    const interval = setInterval(() => {
      setClouds((prevClouds) => [...prevClouds, generateCloud()]);
    }, Math.random() * (5000 - 1000) + 1000); // Random interval between 1.5s and 6s

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Function to remove a cloud once its animation ends
  const handleAnimationEnd = (cloudId: string) => {
    setClouds((prevClouds) => prevClouds.filter((cloud) => cloud.id !== cloudId));
  };

  return (
    <div className="siteWrapper">
      <div className="homeBackgroundWrapper background section first">
        <div className="homePaddingWrapper">
          {clouds.map((cloud) => (
            <img
              key={cloud.id}
              src={cloud.src}
              className="cloud"
              style={{
                top: cloud.top,
                width: cloud.width,
                animationDuration: cloud.animationDuration,
                zIndex: cloud.zIndex,
                opacity: cloud.opacity,
              }}
              alt="cloud"
              onAnimationEnd={() => handleAnimationEnd(cloud.id)}
            />
          ))}
          <div className="titleMenuWrapper">
            <div id="harvestmen-button" role="button">
              <h1>Harvestmen</h1>
            </div>
            <div className="comingSoonText">
              <h2>Coming Soon</h2>
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
