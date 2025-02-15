import { useRef, useState } from "react"

import './css/style.css'

let itemId = 0;

const App = () => {

  let input = useRef(null)

  let [newTodo, setNewTodo] = useState('')

  let [todos, setTodos] = useState([{
    name: 'todo',
    id: Math.random() * 10
  }])


  const removeListItem = (id) => {
    setTodos(
      todos.filter(t => t.id != id)
    )

    input.current.focus()

  }

  const addTodoItem = (e, name) => {
    e.preventDefault()

    if (!name.trim()) return



    todos.push({
      name,
      id: itemId++
    })

    setTodos([...todos])

    setNewTodo('')

  }

  return (
    <main className="main todo-container">
      <h1>Todo List</h1>

      {todos.map(t =>
        <li className='todoItem' key={t.id}> <p>{t.name}</p>
          <button className='btn-delete' onClick={() => removeListItem(t.id)}>X</button></li>
      )}

      <hr />
      <form className="todo-container-footer" onSubmit={(e) => addTodoItem(e, newTodo)}>
        <input ref={input} type="text" value={newTodo} onChange={(e) => setNewTodo(e.currentTarget.value)} />
        <button type="submit">add</button>
      </form>
    </main>
  )
}

export default App