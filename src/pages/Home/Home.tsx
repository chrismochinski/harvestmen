import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import "./Home.scss";
import { CloudProps, cloudImages } from ".";
import { Menu } from "../Menu";

export function Home() {
  const [clouds, setClouds] = useState<CloudProps[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Define a custom smooth scroll function
  const smoothScrollToTop = (duration: number) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Cap progress at 1
      const easeInOutQuad =
        progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, start * (1 - easeInOutQuad)); // Scroll up based on easing

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Continue scrolling until complete
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Use this function inside the useEffect hook
  useEffect(() => {
    const delay = 400;
    const scrollDuration = 1200;

    const timer = setTimeout(() => {
      smoothScrollToTop(scrollDuration);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const generateCloud = (): CloudProps => {
      const randomCloud = cloudImages[Math.floor(Math.random() * cloudImages.length)];
      const randomY = Math.random() * 34; // Random Y position in percentage
      const randomSize = Math.random() * (700 - 200) + 200; // Random size between 200px and 700px
      const randomSpeed = Math.random() * (90 - 30) + 30; // Random speed between 30s and 90s
      const randomOpacity = Math.random() * (0.7 - 0.1) + 0.1; // Random opacity between 0.1 and 0.7
      const randomZIndex = Math.floor(Math.random() * 6) - 2; // Random z-index between -2 and 3

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
    }, Math.random() * (5000 - 2000) + 2000); // Random interval between 2s and 6s

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Function to remove a cloud once its animation ends
  const handleAnimationEnd = (cloudId: string) => {
    setClouds((prevClouds) => prevClouds.filter((cloud) => cloud.id !== cloudId));
  };

  const handleMenuOpen = () => {
    console.log("menu open clicked!");
    const siteWrapper = document.querySelector(".siteWrapper");
    if (siteWrapper) {
      siteWrapper.classList.add("flyingAnimation");
    }


    document.querySelector(".homeBackgroundWrapper")?.classList.add("flyingAnimation");
    document.querySelector(".menuInner")?.classList.add("flyingAnimation");
    document.querySelector(".footer")?.classList.add("flyingAnimation");
    setMenuOpen(true);
  };

  return (
    <div className="siteWrapper">
      <div className="homeBackgroundWrapper background section first">
        <div className={`homePaddingWrapper ${menuOpen ? "menuOpen" : ""}`}>
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

          <Menu menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
