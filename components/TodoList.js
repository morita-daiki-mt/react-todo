import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export function TodoList(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>
            {props.deadline}
        </p>
        <div>checkbox仮</div>
    </div>
  )
}
