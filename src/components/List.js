import React from 'react';
import ListItem from './ListItem';

function List({ todos }) {
  return (
    <ul>
      { todos.map((item, i) => {
        return <ListItem key={i} todo={item}></ListItem>
      })}
    </ul>
  )
}

export default List;
