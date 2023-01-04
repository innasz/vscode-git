import { v4 as uuidv4 } from 'uuid';

// 리듀서를 리턴하는 많은 모듈들이 들어감
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SWITCH_TODO = 'SWITCH_TODO';

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [
  {
    id: uuidv4(),
    title: '제목1',
    contents: '내용1',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '제목2',
    contents: '내용2',
    isDone: true,
  },
  {
    id: uuidv4(),
    title: '제목3',
    contents: '내용3',
    isDone: false,
  },
];
const todos = (state = initialState, action) => {
  console.log('state', state);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todos;
