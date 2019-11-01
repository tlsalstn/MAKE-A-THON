import React from 'react';
import './Card.css';

const Card = ({ children, className }) => (
    <div className={className + " " + "card"}>
        {children}
    </div>
);

export default Card;