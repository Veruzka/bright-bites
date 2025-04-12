import React from "react";

export default {
    title: "Components/Typography",
};

export const Headings = () => (
    <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h2 className="bold">Heading 2 Bold</h2>
    <h2 className="italic">Heading 2 Italic</h2>
    <h3>Heading 3</h3>
    <h3 className="bold">Heading 3 Bold</h3>
    <h3 className="italic">Heading 3 Italic</h3>
  </div>
);

export const Paragraphs = () => (
    <div>
    <p className="summary">Summary paragraph</p>
    <p className="summary bold">Summary bold</p>
    <p className="summary italic">Summary italic</p>

    <p className="summary-home">Summary Home</p>
    <p className="body">Body text</p>
    <p className="body bold">Body bold</p>
    <p className="body italic">Body italic</p>

    <p className="small">Small text</p>
    <p className="small-bold">Small bold text</p>
  </div>
);



/*import SideNavigation from "./BB_SideNavigation";

export default {
    title: "Components/SideNavigation",
    component: SideNavigation,
};

export const Default = () => <SideNavigation/>;*/