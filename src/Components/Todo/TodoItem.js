import React from "react";
import styled from "styled-components";
import "./TodoItem.css";

const Item = styled.div``;
const Remove = styled.div``;
const TodoText = styled.div``;
const Mark = styled.div``;

const TodoItem = ({ text, checked, id, onToggle, onRemove }) => {
  return (
    <Item className="todo-item" onClick={() => onToggle(id)}>
      <Remove
        className="remove"
        onClick={e => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        &times;
      </Remove>
      <TodoText className={`todo-text ${checked ? ` checked` : ""}`}>
        <div>{text}</div>
      </TodoText>
      {checked && <Mark className="check-mark">√</Mark>}
    </Item>
  );
};

export default TodoItem;
