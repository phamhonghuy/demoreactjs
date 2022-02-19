import React from 'react'
import Todo from './Todo'
export default function TodoList({todoList}) {
  return (
    <>
        {
            console.log(todoList);
            todoList.map((todo) => (
                <Todo todo={todo} />
            ))

        }
    </>
  );
}
