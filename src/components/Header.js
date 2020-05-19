import React from 'react';
import './Header.css';


const Header = ({in_proccess, in_done}) => {
  return(
    <div className="d-flex header">
      <h1>Ваши великие дела</h1>
      <h2>{in_proccess} в процессе, {in_done} сделано</h2>
    </div>
    
  )
}

export default Header;