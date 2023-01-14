import styles from '../styles/Home.module.css'

export function TodoList(props) {
  return (
    <div>
      <h1>未完了</h1>
      {props.todos.map((todo, index) => {
        if(!todo.complete){
          return(
            <div key={index}>
              <h3>{todo.task_name}</h3>
              <p>
                {todo.task_deadline}
              </p>              
              <button onClick={() => props.completeTodo(index)}>完了</button>
            </div>
          );
        }
      })}

      <h1>完了済み</h1>
      {props.todos.map((todo, index) => {
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
