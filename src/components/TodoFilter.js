import React from 'react';

const buttons = [
    { name: 'all', label: 'Все' },
    { name: 'active', label: 'В процессе' },
    { name: 'done', label: 'Сделаны' }
  ];

const TodoFilter = ({filter, onFilterChange}) => {

    return (
        <div className="btn-group">
                {buttons.map(({name, label}) => {
                        const classes = `btn ${filter === name ? 'btn-info' : 'btn-outline-secondary'}`
                        return <button type="button" key={name} className={classes} onClick={() => onFilterChange(name)}>{label}</button>
                })}
        </div>
      );
  };
  
  export default TodoFilter;