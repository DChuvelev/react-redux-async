import React from "react";
import './Items.css';
import ItemCard from "../ItemCard/ItemCard";
import { useSelector } from "react-redux";

export default function Items() {
    const items = useSelector(store => store.items.data);
    const searchString = useSelector(store => store.items.searchString);
    console.log(searchString);
    return (
        <div className="items">
            <ul className='items__cards'>
                {items.filter((item) => item.title.toLowerCase().includes(searchString.toLowerCase())).map(item => {
                    return (
                        <ItemCard item={item} key={item.id}/>
                    )
                })}
            </ul>        
        </div>
    )
}