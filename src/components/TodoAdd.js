import React, {useState} from 'react';


 const TodoAdd = ({onItemAdded}) => {

  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  let classesInput = 'form-control'

  const addTodo = (e) => {
    e.preventDefault()
    if (value) {
      setError(false)
      onItemAdded(value)
      setValue('')
    }else{
      setError(true)
    }
    
  }

  if (error) {
    classesInput += ' is-invalid'
  }

  return (
    <form
      className="bottom-panel d-flex"
      onSubmit={(e) => addTodo(e)}>

      <input type="text"
             className={classesInput}
             placeholder="Что добавить?" value={value} onChange={(e) => setValue(e.target.value)} />


      <button type="submit"
              className="btn btn-outline-secondary">Добавить</button>
    </form>
  );
}

export default TodoAdd
