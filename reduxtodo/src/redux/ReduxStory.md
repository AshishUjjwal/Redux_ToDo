🚀 Redux: The Whole Story (Simplified Guide)
Redux is a state management library used in JavaScript apps, especially with React. It's like a centralized database for your app’s state, ensuring predictable updates and easier debugging.

1️⃣ The Core Concepts of Redux
🔹 Store → A global object holding the application state.
🔹 Actions → Objects describing what should change in state.
🔹 Reducers → Functions that specify how state changes when an action is dispatched.
🔹 Dispatch → A function that sends actions to the reducer.
🔹 Selectors → Functions to extract specific parts of the state.

2️⃣ Traditional Redux vs. Redux Toolkit
🏗 Traditional Redux (Manual & Boilerplate-heavy)
Requires separate files for Actions, Reducers, and Constants.
State updates must be immutable (e.g., using ...spread).
Uses Redux Thunk for async operations (e.g., API calls).
✅ Structure (Old Redux)

```
src/
│── redux/
│   ├── store.js        # Create Store
│   ├── actions.js      # Define Actions
│   ├── reducers.js     # Define Reducers
│   ├── types.js        # Action Constants
│── components/
│── App.js
│── index.js
```
Example (Old Redux)
```
// actions.js
export const ADD_TODO = 'ADD_TODO';

export const addTodo = (text) => {
    return { type: ADD_TODO, payload: text };
};

// reducers.js
const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, action.payload] };
        default:
            return state;
    }
};

// store.js
import { createStore } from 'redux';
import todoReducer from './reducers';

const store = createStore(todoReducer);
export default store;
```

🔥 Redux Toolkit (Modern & Simpler)
Redux Toolkit (RTK) is the official way to write Redux. It removes boilerplate code and automates state immutability using Immer.js.

✅ Structure (Redux Toolkit)

```
src/
│── redux/
│   ├── store.js           # Create Store
│   ├── features/
│   │   ├── todoSlice.js   # Actions & Reducers in one place
│── components/
│── App.js
│── index.js
```
Example (Redux Toolkit)

```
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Reducer + Actions (in one file)
const todoSlice = createSlice({
    name: 'todo',
    initialState: { todos: [] },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }
    }
});

export const { addTodo } = todoSlice.actions;

const store = configureStore({
    reducer: { todo: todoSlice.reducer }
});

export default store;
```

✅ Advantages of Redux Toolkit

Less boilerplate (Reducers & Actions in one place).
Built-in immutability (No need for spread ...state).
Async handling with createAsyncThunk.
More optimized & easier to scale.


3️⃣ React-Redux: Connecting Redux to React
Redux alone doesn't work with React. React-Redux is the bridge!

How to Use Redux in React
3️⃣.1️⃣ Wrap App with Provider

```
import { Provider } from 'react-redux';
import store from './redux/store';

<Provider store={store}>
  <App />
</Provider>
```

3️⃣.2️⃣ Dispatch Actions with useDispatch()

```
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todoSlice';

const dispatch = useDispatch();
dispatch(addTodo("New Task"));
```

3️⃣.3️⃣ Read State with useSelector()

```
import { useSelector } from 'react-redux';

const todos = useSelector(state => state.todo.todos);
console.log(todos);
```