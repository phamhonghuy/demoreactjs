import React from 'react'
import Button from '@atlaskit/button'
import Todo from './Todo'
export default function TodoList({todoList}) {
  return (
    <>
        todolist.map( todo => <Todo/>)
    </>
  )
}