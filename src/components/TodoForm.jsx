import { useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

export function TodoForm() {
  const [input_todo, setTodos] = useState();

  const taskNameRef = useRef();
  const taskDeadlineRef = useRef();

  const AddTodo = () => {
    const taskName = taskNameRef.current.value;
    const taskDeadline = taskDeadlineRef.current.value;
    if(taskName == '' || taskDeadline == ''){ return false; }

    console.log(taskName);
    console.log(taskDeadline);
    // setTodos((prevTodos) => {
      // ここでTodosを作成
    // })
  }

  return (
    <div>
      <input type="text" ref={taskNameRef}/>
      <input type="date" ref={taskDeadlineRef}/>
      <button onClick={AddTodo}>追加</button>
    </div>
  )
}
