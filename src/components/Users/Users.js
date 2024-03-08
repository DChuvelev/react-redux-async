import React from "react";
import './Users.css';
import UserCard from "../UserCard/UserCard";
import { useSelector } from "react-redux";
export default function Users() {
    const users = useSelector(store => store.users.data);
    return (
        <div className="users">
            <h1 className="users__title">Users</h1>
            <div className="users__cards-container">
                <ul className='users__cards'>
                    {users.map(user => {
                        return (
                            <UserCard user={user} key={user.id}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}