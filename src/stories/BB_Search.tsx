import React from "react";
import Chip from "./BB_Chip";
import Input from "./BB_Input";
import Button from "./BB_Button";
import Spacing from "./BB_Spacing";
import './bb_search.css';

const questions = [
    "What's my least popular product?",
    "Why did sales go down yesterday?",
  ];


  const Search: React.FC = () => {
    return (
        <aside className="sidebar">
        <div className="recommended-section">
          <p className="small-bold">Recommended questions</p>
          <Spacing size="16" />
          <div className="chip-list">
            {questions.map((question, i) => (
              <Chip key={i} label={question} href="/summaries/:slug" />
            ))}
          </div>
        </div>
  
        <Spacing size="40" />
  
        <div className="ask-section">
          <Spacing size="32" />
          <Input placeholder="Ask AI anything about your store" />
          <Button primary={true} label="Search" size="large" />
        </div>
      </aside>
      
    );
  };
  
  export default Search;