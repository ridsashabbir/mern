import "./App.css";

let name = "Ridsa";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </nav>

      <div className="container">
        {/* everthing within braces will work as javascript, below is an example */}
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          error placeat voluptatibus repellendus obcaecati odio nesciunt eaque
          ipsam cupiditate odit blanditiis aliquid libero minima, nostrum
          voluptas doloremque adipisci? A minus sit fugit maiores vel!
        </p>
      </div>
    </>
  );
}

export default App;
