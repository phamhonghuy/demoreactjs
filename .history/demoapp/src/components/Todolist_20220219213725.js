import React from 'react'
import Todo from './Todo'
export default function TodoList({todoList}) {
  return (
    <>
        {
            console.log()
            todoList.map((todo) => (
                <Todo todo={todo} />
            ))

        }
    </>
  );
}
