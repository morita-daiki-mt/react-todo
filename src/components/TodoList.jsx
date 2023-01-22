import { TodoDetail } from '../components/TodoDetail'

export function TodoList(props) {
  
  return (
    <div>
      <h1>未完了</h1>
      <div>
        {props.todos?.map((todo, index) => { 
          if(!todo.complete){
            return (
              <TodoDetail {...todo} index={index} completeTodo={props.completeTodo} key={index}/>
            )
          }
        })}
      </div>

      <h1>完了済み</h1>
      {props.todos?.map((todo, index) => { 
        if(todo.complete){
          return (
            <TodoDetail {...todo} index={index} completeTodo={props.completeTodo} key={index}/>
          )
        }
      })}
    </div>
  )
}
