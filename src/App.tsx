import "./App.scss";
import albumCover from "./album-cover.png";

window.onload = () => {
  setTimeout(() => {
    document.querySelector("img")?.classList.add("animate-in");
    document.querySelector("p")?.classList.add("animate-in");
    document.querySelector(".App")?.classList.add("animate-in");
  }, 400);
};

function App() {
  return (
    <div className="App">
      <img src={albumCover} alt="intro and album cover concept" />
      <p>coming soon</p>
    </div>
  );
}

export default App;
