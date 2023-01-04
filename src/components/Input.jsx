import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../modules/todos';

function Input() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsInputChange = (event) => {
    setContents(event.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    // 함수화시키면 어떨까?
    // 저 action 객체를 return하는 함수를 만들면 어떨까?
  };

  return (
    <StyledInputBox>
      <form onSubmit={handleSubmitButtonClick}>
        <input onChange={handleTitleInputChange} value={title} type='text' />

        <input
          onChange={handleContentsInputChange}
          value={contents}
          type='text'
        />
        <button>추가</button>
      </form>
    </StyledInputBox>
  );
}

export default Input;

const StyledInputBox = styled.div`
  background-color: #f7dce5;
  padding: 30px;
`;
