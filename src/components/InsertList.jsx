import React from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";

export default function InsertList({ todoList, setTodoList }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      deleted: false,
    });
    setTodoList(nextTodoList);

    setText("");
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        onChange={onChangeInput}
      />
      <Button
        className="ms-3"
        variant="outline-primary"
        type="submit"
        onClick={onClickAddButton}
      >
        추가
      </Button>
    </div>
  );
}
