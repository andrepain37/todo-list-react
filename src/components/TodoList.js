import React from 'react';
import TodoItem from './TodoItem'
import './TodoList.css'



const TodoList = ({todos, onToggleImportant, onToggleDone, onDelete}) => {
    return(
      <ul className="list-group todo-list">
          {todos.map(todo => <TodoItem 
          {...todo} 
          key={todo.id}
          onToggleImportant={ () => onToggleImportant(todo.id) }
          onToggleDone={ () => onToggleDone(todo.id) }
          onDelete={ () => onDelete(todo.id) }
           />)}
      </ul>
    )
  }
  
export default TodoList;