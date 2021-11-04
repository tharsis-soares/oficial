import React, { useState, useEffect } from 'react'
import { Heading, VStack, IconButton } from '@chakra-ui/react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function TodoArea() {

    
  const initialTodos = [
    {
        id: 1,
        body: 'fazer app',
    },
    {
        id: 2,
        body: 'fazer web-app',
    },
    {
        id: 3,
        body: 'estudo continuo'
    }
  ]
   
  const [todos, setTodos] = useState(
      () => JSON.parse(localStorage.getItem('todos')) || []) 

  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
    function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
        return todo.id !== id
    })
    setTodos(newTodos)
  }

  function addTodo(todo) {
      setTodos([...todos, todo])
  }

  return <>
        <VStack>
            <Heading 
            
            mb="8"
            fontWeight="extrabold"
            size="2xl"
            bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
            bgClip="text"
            >Lista de Tarefas</Heading>
            <TodoList todos={todos} deleteTodo={deleteTodo}/>
            <AddTodo addTodo={addTodo} mb="8" />
        </VStack>
    </>
}

export default TodoArea