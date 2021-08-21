import "./styles.css";
import Searchform from "./Searchform.js";
import CurrentTemperature from "./CurrentTemperature";

export default function App() {
  return (
    <div className="App">
      <Searchform />
      <CurrentTemperature />
      <div className="coder">
        <a href="https://github.com/josevaltier/weather-react" target="_blank">
          Open-source code
        </a>{" "}
        by Josefina Valtier
      </div>
    </div>
  );
}
