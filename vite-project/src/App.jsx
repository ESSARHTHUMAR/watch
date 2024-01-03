import { useState } from "react";
import "./App.css";
import HeroBanner from "./Components/HeroBanner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <HeroBanner/>
      </div>
    </>
  );
}

export default App;
