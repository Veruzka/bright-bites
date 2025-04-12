import React from 'react';
import './bb_input.css';

export interface BB_InputProps {
    placeholder?: string;
    type?: string;
    name?: string;
};

export const Input: React.FC<BB_InputProps> = ({
    placeholder= "Ask anything about your webstore",
    type = "text",
    name = "searchText",
}) => {
    return (
        <input 
            className='input'
            placeholder={placeholder}
            type={type}
            name={name}
        />
    );
};

export default Input;