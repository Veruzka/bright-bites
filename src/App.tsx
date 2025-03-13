import "@radix-ui/themes/styles.css";
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




