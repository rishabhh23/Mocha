import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-white from-black to-purple-600 bg-gradient-to-r">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
