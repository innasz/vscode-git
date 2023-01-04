import { combineReducers, createStore } from 'redux';
import todos from '../modules/todos';
import users from '../modules/users';
import title from '../modules/title';

// 1. rootReducer를 만들 것
const rootReducer = combineReducers({
  todos,
  users,
  title,
});

// 2. 이걸 이용해서 store를 만들 것이다.
const store = createStore(rootReducer);

// 3. export 해서 다른 파일에서 import 할 수 있도록 한다.
export default store;
