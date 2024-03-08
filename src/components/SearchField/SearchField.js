import React from "react";
import './SearchField.css';
import { setSearchString } from "../redux/actions";
import { useDispatch } from "react-redux";
export default function SearchField() {
    const dispatch = useDispatch();
    const handleOnChange = (evt) => {
        console.log(evt.target.value);
        dispatch(setSearchString(evt.target.value));
    }
    return (
        <input 
            className="search-field"
            name='search'
            type="String"
            // value={input}
            placeholder="Input search string"
            onChange={handleOnChange}
        />
    )
}