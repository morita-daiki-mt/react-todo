import styles from '../styles/Home.module.css'

export function TodoList(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.deadline}
      </p>
      <input type="checkbox" />
    </div>
  )
}
