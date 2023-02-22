import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Item({ todoItem, todoList, setTodoList }) {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  const onClickEditButton = () => {
    setEdited(true);
  };

  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  const onClickSubmitButton = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? newText : item.text,
    }));
    setTodoList(nextTodoList);

    setEdited(false);
  };

  const onClickDeleteButton = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));

      setTodoList(nextTodoList);
    }
  };

  return (
    <li className="mb-3">
      <Card className="card">
        <Card.Body>
          <Card.Text>
            <input
              type="checkbox"
              checked={todoItem.checked}
              onChange={onChangeCheckbox}
              className="me-3"
            />

            {edited ? (
              <input
                type="text"
                value={newText}
                ref={editInputRef}
                onChange={onChangeEditInput}
              />
            ) : (
              <span className="fs-4">{todoItem.text}</span>
            )}
          </Card.Text>
          <div className="text-end">
            {!todoItem.checked ? (
              edited ? (
                <Button
                  variant="outline-primary"
                  type="button"
                  onClick={onClickSubmitButton}
                >
                  확인
                </Button>
              ) : (
                <Button
                  variant="outline-primary"
                  type="button"
                  onClick={onClickEditButton}
                >
                  수정
                </Button>
              )
            ) : null}
            <Button
              className="ms-3"
              variant="outline-danger"
              type="button"
              onClick={onClickDeleteButton}
            >
              삭제
            </Button>
          </div>
        </Card.Body>
      </Card>
    </li>
  );
}
