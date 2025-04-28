import "@radix-ui/themes/styles.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shopify from "./pages/Shopify";
import Etsy from "./pages/Etsy";
import Components from "./pages/Components";
import "framer-components/dist/styles.css";
import './styles/typography.css';


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shopify" element={<Shopify />} />
                <Route path="/Etsy" element={<Etsy />} />
                <Route path="/Components" element={<Components />} />
            </Routes>
        </Router>
    );
};

export default App;




