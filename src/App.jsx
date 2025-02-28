import "./global.css";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Collection from "./Collection/Collection";

import Footer from "./Footer/Footer";
const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <About />
      <Collection />
      <Footer />
    </div>
  );
};

export default App;
