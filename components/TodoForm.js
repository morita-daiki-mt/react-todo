import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

export function TodoForm() {
  const [input_todo, setTodos] = useState();

  const taskNameRef = useRef();

  const AddTodo = () => {
    const taskName = taskNameRef.current.value;
    console.log(taskName);
  }

  return (
    <div>
        <input type="text" ref={taskNameRef}/>
        <button onClick={AddTodo}>追加</button>
    </div>
  )
}
