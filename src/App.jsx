import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {

  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{                                          //this todo itself will be an object, thats why, we have spreaded that again
    setTodos((prevArray)=>[...prevArray,{id:Date.now(),...todo}])
  }

  const updatedTodo=(id,todo)=>{
    setTodos((prevArray)=> prevArray.map((prevTodo)=> prevTodo.id===id ? todo : prevTodo))
  }

  const deleteTodo=(id)=>{
    setTodos((prevArray)=> prevArray.filter((prevTodo)=> prevTodo.id!==id ))
  }

  const toggleComplete=(id)=>{ 
    setTodos((prevArray)=> prevArray.map((prevTodo)=> prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updatedTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
