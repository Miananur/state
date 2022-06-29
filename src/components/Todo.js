import React from 'react';
import {useState} from 'react'


const Todo = () => {
    const [todos, setTodos] = useState([
      "Belajar react",
      "Belajar state"
     ]);
    const [inputTodo, setInputTodo]=useState("")

    const handleTodos=(e)=>{
      setInputTodo(e.target.value)
    }

    const handleClick=()=>{
      setTodos([...todos, inputTodo])
      setInputTodo("")
    }


  return (
    <div>
       <input 
       type="text"
       placeholder="todosss"
       value={inputTodo}
       onChange={handleTodos}
       />
       <button onClick={handleClick}>Add</button>

       {todos.map((item, index) => (
        <div>
          <p key={index}>{item}</p>
        </div>
       ))}
    </div>
  )
}

export default Todo;