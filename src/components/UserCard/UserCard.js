import React from "react";
import './UserCard.css';
export default function UserCard( {user} ) {
    return (
        <div className="user-card">
            <p className="user-card__info">{`User name: ${user.name.firstname} ${user.name.lastname}`}</p>
            <p className="user-card__info">{`Address: ${user.address.city}`}</p>
            <p className="user-card__info">{`Phone number: ${user.phone}`}</p>
        </div>
    )
}