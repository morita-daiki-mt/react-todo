import { useCallback, useState } from 'react'
import styles from '../styles/Home.module.css'

export function TodoForm() {
  const [inputTodo, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDeadLine, setTaskDeadLine] = useState("");

  const AddTodo = useCallback(() => {
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
      <button onClick={AddTodo}>追加</button>
    </div>
  )
}
