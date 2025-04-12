import Search from "./BB_Search";
import './bb_search.css';

export default {
    title: "Components/Search",
    component: Search,
};

export const Default = () => (
    <div style={{ display: "flex", height: "100vh" }}>
        <div style={{  width: "350px", flexShrink: 0 }}>
            <Search />
        </div>
    </div>

);