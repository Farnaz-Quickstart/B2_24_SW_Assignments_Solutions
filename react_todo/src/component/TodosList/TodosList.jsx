import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodosList( {todos,setTodos} ) {
  const [originalTodos, setOriginalTodos] = useState (todos)


  let handleCompletedTodos = () => {
    let filteredTodo = todos.filter ((todo)=>{ return todo.isCompleted})
    setTodos (filteredTodo)
  }

  let handleInCompletedTodos = () => {
    let filteredTodo = todos.filter ((todo)=>{ return !todo.isCompleted})
    setTodos (filteredTodo)
  }

  let handleAllTodos = () => {
    setTodos (originalTodos)
  }

  let handleUpdate = (event, index) => {
    const updatedTodos = todos.map((todo, idx) => {
      if (idx === index) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  let handleDelete = (event, index) => {
    const updatedTodos = todos.filter ((todo,idx)=>{
      if (idx!==index) return todo
    })
    setTodos(updatedTodos);
  }

  return (
    <>

      <h1>Todos List</h1>
      <Button variant="outline-secondary" onClick={handleAllTodos}>All todos</Button>
      <Button variant="outline-secondary" onClick={handleCompletedTodos}>Completed todos</Button>
      <Button variant="outline-secondary" onClick={handleInCompletedTodos}>Incompleted todos</Button>

      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Todo Date</th>
          <th>Todo Text</th>
          <th>isCompleted</th>
          <th>Completed</th>
          <th>Deleted</th>
        </tr>
      </thead>
      <tbody>
        
        {todos.map ((todo,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{todo.todo_date}</td>
            <td>{todo.todo_text}</td>
            <td>{todo.isCompleted ? "YES" : "NO"}</td>
            <td><Button variant="success" onClick={(event)=>handleUpdate(event,index)}>Update</Button></td>
            <td><Button variant="danger" onClick={(event)=>handleDelete(event,index)}>Delete</Button></td>
        </tr>
        ))}
      </tbody>
    </Table>

    </>
  )
}
