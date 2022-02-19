import React from 'react'
import Todo from './Todo'
export default function TodoList({todoList}) {
  return (
    <>
        {
            con
            todoList.map((todo) => (
                <Todo todo={todo} />
            ))

        }
    </>
  );
}
