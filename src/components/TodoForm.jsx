import { useCallback, useState } from 'react'
import { useTodo } from '../hooks/useTodo';
import styles from '../styles/Home.module.css'

export function TodoForm(props) {
  return (
    <div>
      <input type="text" value={props.taskName} onChange={(e) => props.setTaskName(e.target.value)}/>
      <input type="date" value={props.taskDeadLine} onChange={(e) => props.setTaskDeadLine(e.target.value)}/>
      <button onClick={props.addTodo}>追加</button>
    </div>
  )
}
