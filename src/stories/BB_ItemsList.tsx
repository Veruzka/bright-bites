import React from 'react';
import './bb_itemslist.css';
import { CheckSquare, XSquare } from 'phosphor-react';
import '../styles/typography.css'
import Spacing from './BB_Spacing';

export interface ListItem {
    icon: "check" | "x";
    text: string;
};

export interface ItemsListProps {
    title?: string;
    items: ListItem[];
};

export const ItemsList: React.FC<ItemsListProps> = ({title, items}) => {
    return (
        <div className="list-container">
            <h2>{title}</h2>
            <div className="list-items">
                {items.map((item, index) => (
                    <div className="list-item" key={index}>
                        {item.icon === "check" ? (
                            <CheckSquare size={26} color="rgb(159, 209, 21)" weight="bold" />
                        ):(
                            <XSquare size={26} color="rgb(255, 85, 85)" weight="bold" />
                        )}
                        <p className="summary-home">{item.text}</p>

                    </div>
                ))}

            </div>

        </div>

    );
};

export default ItemsList;