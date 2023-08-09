import "./App.css";
import NavBar from "./Components/NavBar";
// import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  return (
    <>
      <NavBar title="TextUtils" about="About TextUtils" />
      {/* <div className="container my-5">
        <TextForm heading="Enter your Text to Analyze" />
      </div> */}
      <About />

      {/* <NavBar /> */}
    </>
  );
}

export default App;
