import React from 'react';

import "./TodoItem.css";

const TodoItem = ({label, important, onToggleImportant, onToggleDone, onDelete, done}) => {


    let styles =  {
        color: important ? 'tomato' : ''
    }  

    let classTodo = `list-group-item ${done ? 'done' : ''}`
 
    return (
    <li className={classTodo} style={styles}>
        <p className="todo-list-item-label" onClick={onToggleDone}>{label}</p>
        <aside>
            <button type="button" className="btn btn-todo btn-outline-success btn-sm float-right" onClick={onToggleImportant}>
                <i className="fa fa-exclamation" />
            </button>

            <button type="button" className="btn btn-todo btn-outline-danger btn-sm float-right" onClick={onDelete}>
                <i className="fa fa-trash-o" />
            </button>
        </aside>
        
    </li>)
  }
  
export default TodoItem;