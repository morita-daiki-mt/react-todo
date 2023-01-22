import styles from '../styles/Home.module.css'

export function TodoList(props) {
  const button = {
    completeButton: function completeButton() {
      if(props.complete == false){
        return (
          <button onClick={() => props.completeTodo(props.index)}>完了</button>
        )
      }
    }
  }

  return (
    <div>
      <h3>{props.task_name}</h3>
      <p>
        完了期日: {props.task_deadline}
      </p>
      <button.completeButton/>
    </div>
  )
}
