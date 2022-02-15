import React from 'react';

const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)} /> {props.todo.title}
    </li>
  );
}

export default TodoItem;
