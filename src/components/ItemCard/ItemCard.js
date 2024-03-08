import React from "react";
import './ItemCard.css';
export default function ItemCard({ item }) {
    return (
        <div className="item-card">
            <img className="item-card__image" src={item.image} alt="error loading"/>
            <h2 className="item-card__title">{item.title}</h2>
            <p className="item-card__description">{item.description}</p>
        </div>
    )
}