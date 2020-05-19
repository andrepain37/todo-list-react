import React from 'react';
import "./SearchTodo.css";

const SearchTodo = ({onSearchChange}) => {


    return(
      <input type="text" className="form-control search" onChange={(e) => onSearchChange(e.target.value)} placeholder="Поиск дел" />
    )
}


  export default SearchTodo;
  