import React, { useState } from "react";
import InsertList from "../components/InsertList";
import ItemList from "../components/ItemList";

export default function ListPage() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="m-3">
      <InsertList todoList={todoList} setTodoList={setTodoList} />
      <ItemList
        title={"해야할 일"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />
      <ItemList
        title={"완료된 일"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
    </div>
  );
}
