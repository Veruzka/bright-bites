/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shopify from "./pages/Shopify";
import Etsy from "./pages/Etsy";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shopify" element={<Shopify />} />
                <Route path="/Etsy" element={<Etsy />} />
            </Routes>
        </Router>
    );
};

export default App;




