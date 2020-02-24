import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Container = styled.div``;

const TodoItemList = ({todos, onToggle, onRemove}) => {
    return (
        <Container>
            {
                todos.map(({id, text, checked}) => (
                    <TodoItem
                        key={id}
                        id={id}
                        text={text}
                        checked={checked}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ),[])
            }
        </Container>
    );
};

export default TodoItemList;