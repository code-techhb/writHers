import "./global.css";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <About />
    </div>
  );
};

export default App;
