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

    setTodos((inputTodo) => ([...inputTodo, {task_name: taskName, task_deadline: taskDeadLine}]))
  }, [taskName, taskDeadLine])

  return (
    <div>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      <input type="date" value={taskDeadLine} onChange={(e) => setTaskDeadLine(e.target.value)}/>
      <button onClick={addTodo}>追加</button>

      {
          todos.map((todo, index) => {
          return(
            <div key={index}>
              <h1>{todo.task_name}</h1>
              <p>
                {todo.task_deadline}
              </p>
              <input type="checkbox" />
            </div>
          );
        })
      }
    </div>
  )
}
