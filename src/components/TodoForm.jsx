import { useCallback, useState } from 'react'
import { useTodo } from '../hooks/useTodo';
import styles from '../styles/Home.module.css'

export function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDeadLine, setTaskDeadLine] = useState('');

  const addTodo = useCallback(() => {
    if(taskName == '' || taskDeadLine == ''){ 
      alert('項目を埋めてください。');
      return false; 
    }

    setTodos((inputTodo) => ([...inputTodo, {task_name: taskName, task_deadline: taskDeadLine, complete: false }]))
  }, [taskName, taskDeadLine])

  const completeTodo = useCallback((task_key) => {
    setTodos((todos) => (
      todos.map(
        (todo, index) => (index == task_key ? {task_name: todo.task_name, task_deadline: todo.task_deadline, complete: true} : todo))
    ));
  }, [])

  return (
    <div>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      <input type="date" value={taskDeadLine} onChange={(e) => setTaskDeadLine(e.target.value)}/>
      <button onClick={addTodo}>追加</button>

      <h1>未完了</h1>
      {todos.map((todo, index) => {
        if(!todo.complete){
          return(
            <div key={index}>
              <h3>{todo.task_name}</h3>
              <p>
                {todo.task_deadline}
              </p>
              {todo.complete ? <p>完了</p> : <p>未完了</p>}
              
              <button onClick={() => completeTodo(index)}>完了</button>
            </div>
          );
        }
      })}

      <h1>完了済み</h1>
      {todos.map((todo, index) => {
        if(todo.complete){
          return(
            <div key={index}>
              <h3>{todo.task_name}</h3>
              <p>
                {todo.task_deadline}
              </p>
            </div>
          );
        }
      })}
    </div>
  )
}
