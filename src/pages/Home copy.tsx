import React from "react";

const Home: React.FC = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Side navigation */}
          

            {/* Main content */}
            <div style={{ flexGrow: 1, padding: "20px" }}>
                <h1>Welcome to My Portfolio</h1>
                <p>This is the homepage.</p>
            </div>
        </div>
    );
};

export default Home;