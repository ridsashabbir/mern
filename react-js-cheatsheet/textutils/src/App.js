import "./App.css";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <NavBar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-5">
        <TextForm heading="Enter your Text to Analyze" />
      </div>
      {/* <About /> */}

      {/* <NavBar /> */}
    </>
  );
}

export default App;
