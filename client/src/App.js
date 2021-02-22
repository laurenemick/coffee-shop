import MenuItem from "./components/MenuItem";
import AdditionalExtras from "./components/AdditionalExtras";
import Total from "./components/Total";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left-side">
        <MenuItem />
      </div>
      <div className="right-side">
        <AdditionalExtras />
        <Total />
      </div>
    </div>
  );
}

export default App;
