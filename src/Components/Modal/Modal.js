import React, { useState, useRef } from "react";
import styled from "styled-components";
import TodoItemList from "../Todo/TodoItemList";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;
const ModalPlate = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  border-radius: 6px;
  background-color: rgb(250, 250, 250);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);
  & > * {
    &:first-child {
      margin-top: 16px;
    }
    margin-left: 16px;
    margin-right: 16px;
  }
`;
const ModalTitle = styled.p`
  font-size: 16pt;
  font-weight: 600;
  color: #333;
`;
const Content = styled.div`
  border-top: 2px solid #bebebe;
  margin-top: 16px;
  p {
    padding: 8px;
    font-size: 12pt;
    color: #999;
  }
  height: 200px;
  overflow: auto;
`;
const BtnWrap = styled.div`
  margin: 0;
  margin-top: 8px;
  button {
    width: 100%;
    padding: 5px 0;
    border-radius: 0 0 6px 6px;
    background-color: #a09f9d;
    font-size: 13pt;
    color: white;
    border: 0;
    cursor: pointer;
    &:hover {
      background-color: #605f5e;
    }
    &:active {
      background-color: #605f5e;
    }
  }
`;

const InputWrap = styled.div`
  font-weight: 600;
  padding: 0px 10px;
  margin-top: 16px;
`;
const AddTodoBtn = styled.button`
  margin-left: 6px;
  border: none;
  border-radius: 4px;
  padding: 3px 6px;
  color: white;
  cursor: pointer;
  background-color: #a09f9d;
  &:hover {
    background-color: #605f5e;
  }
`;

const Modal = ({ selDate, isOpen, close }) => {
  const [state, setState] = useState({
    id: 0,
    todos: []
  });

  const todoInput = useRef();

  const addTodo = () => {
    if (todoInput.current.value !== "") {
      setState({
        todos: state.todos.concat({
          id: state.id,
          text: todoInput.current.value,
          checked: false
        }),
        id: state.id + 1
      });
    }
  };

  const handleToggle = id => {
    const { todos } = state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    setState({
      todos: nextTodos,
      id: state.id
    });
  };

  const handleRemove = id => {
    const { todos } = state;
    setState({
      todos: todos.filter(todo => todo.id !== id),
      id: state.id
    });
  };

  return (
    <>
      {isOpen ? (
        <>
          <Overlay onClick={close} />
          <ModalPlate>
            <ModalTitle>{selDate}일정</ModalTitle>
            <InputWrap>
              할일 <input ref={todoInput} required />
              <AddTodoBtn onClick={addTodo}>추가</AddTodoBtn>
            </InputWrap>
            <Content>
              <TodoItemList
                todos={state.todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
              />
            </Content>
            <BtnWrap>
              <button onClick={close}>닫기</button>
            </BtnWrap>
          </ModalPlate>
        </>
      ) : null}
    </>
  );
};

export default Modal;
