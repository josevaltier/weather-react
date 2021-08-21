import "./styles.css";
import Searchform from "./Searchform.js";
import CurrentTemperature from "./CurrentTemperature";

export default function App() {
  return (
    <div className="App">
      <Searchform />
      <CurrentTemperature />
      <p className="coder">Open-source code by Josefina Valtier</p>
    </div>
  );
}
