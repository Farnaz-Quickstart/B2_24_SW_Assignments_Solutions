import { useState } from 'react';
import './App.css';
import TodosList from './component/TodosList/TodosList';

function App() {
  const [todos, setTodos] = useState ([
    {todo_date:"2024/12/12", todo_text:"Study React", isCompleted: false},
    {todo_date:"2024/10/12", todo_text:"Study HTML", isCompleted: true}, 
    {todo_date:"2024/01/01", todo_text:"Data Structure", isCompleted: true}, 

  ])

  return (
    <div className="App">
      
      <>
        <h1>Todo Component Main</h1>
        <TodosList todos={todos} setTodos={setTodos}/>
      </>
    </div>
  );
}

export default App;
