import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeTodo, switchTodo } from '../modules/todos';

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  const users = useSelector((state) => state.users);
  const userName = users[0].name;

  const dispatch = useDispatch();
  const handleSwitchButtonClick = (id) => {
    dispatch(switchTodo(id));
  };
  return (
    <StyledListBox>
      <h3>
        {userName}이 {isActive ? '할 일 🔥' : '완료한 일 ✨'}
      </h3>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button onClick={() => handleSwitchButtonClick(item.id)}>
                {isActive ? '완료' : '취소'}
              </button>
              <button
                onClick={() => {
                  dispatch(removeTodo(item.id));
                }}
              >
                삭제
              </button>
            </StyledTodoBox>
          );
        })}
    </StyledListBox>
  );
}

export default TodoList;

const StyledListBox = styled.div`
  background-color: #f7f3da;
  padding: 50px;
`;

const StyledTodoBox = styled.div`
  background-color: #daf1f5;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 10px;
  margin: 5px;
`;
