import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    name: '김유안',
    age: 1,
    gender: 'female',
  },
  {
    id: uuidv4(),
    name: '김유안',
    age: 2,
    gender: 'female',
  },
];

const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
