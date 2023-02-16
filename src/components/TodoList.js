import React from 'react';
import Todo from './Todo';
export default function TodoList({ pet, onCheckBtnClick }) {
  return (
    <>
      {todoList.map((pet) => (
        <Todo key={todo.id} pet={pet} onCheckBtnClick={onCheckBtnClick} />
      ))}
    </>
  );
}
