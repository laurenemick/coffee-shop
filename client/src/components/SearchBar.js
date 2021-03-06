import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { search } from "../actions";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

/* 
    TO DO:
        - Change underline color
        - Add Filters
*/

const SearchBar = () => {
    const dispatch = useDispatch();
    const { coffees } = useSelector(
        state => state
    );

    const searchInput = (e, v) => {
        dispatch(search(v));
    }

    return (
        <div className="seach-bar">
            <Autocomplete
                className= "search-field"
                style={{ width:150 }}
                options={coffees.map((option) => option.name)}
                onInputChange={searchInput}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search Menu"
                    />
                )}
            />
        </div>
    );
};

export default SearchBar;