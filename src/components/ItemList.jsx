import React from "react";
import Item from "./Item";

export default function ItemList({
  title,
  todoList,
  setTodoList,
  checkedList,
}) {
  return (
    <div className="mt-3">
      <h4>{title}</h4>
      <ul>
        {todoList &&
          todoList.map((todoItem) => {
            if (todoItem.deleted) return null;
            if (checkedList !== todoItem.checked) return null;
            return (
              <Item
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
      </ul>
    </div>
  );
}
