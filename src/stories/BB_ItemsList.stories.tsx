import { ItemsList, ListItem } from "./BB_ItemsList";

export default {
    title: "Components/List",
    component: ItemsList
};

const sampleItems: ListItem[] = [
    {icon: "check", text: "First thing that's working well test"},
    {icon: "check", text: "Another positive signal"},
    {icon: "check", text: "Something that could be better"}
];

export const Default = () => (<ItemsList title="What's working" items={sampleItems}/>);