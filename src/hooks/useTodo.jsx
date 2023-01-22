import { useState } from 'react'
import { useCookies } from "react-cookie";

export const useTodo = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['todos']);
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDeadLine, setTaskDeadLine] = useState('');

  const addTodo = () => {
    if(taskName == '' || taskDeadLine == ''){ 
      alert('項目を埋めてください。');
      return false; 
    }
    const input_todo = [...todos, {task_name: taskName, task_deadline: taskDeadLine, complete: false}];

    setTodos(input_todo);
    setTodoCookie(input_todo);
    setTaskName('');
    setTaskDeadLine('');
  }

  const completeTodo = (task_key) => {
    const change_todo = todos.map(
      (todo, index) => (index == task_key ? {task_name: todo.task_name, task_deadline: todo.task_deadline, complete: true} : todo)
    )
    setTodos(change_todo);
    setTodoCookie(change_todo);
  }

  const setTodoCookie = (input_todo)=>{
    setCookie('todos', input_todo);
  }

  return {todos, taskName, taskDeadLine, addTodo, completeTodo, setTodos, setTaskName, setTaskDeadLine}
}