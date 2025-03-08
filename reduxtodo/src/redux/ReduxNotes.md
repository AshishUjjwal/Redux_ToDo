📂 Redux Folder Structure (Best Practice)
A well-structured Redux setup follows a feature-based approach:

src/
│── redux/
│   ├── store.js                # Central Redux store
│   ├── features/
│   │   ├── todos/
│   │   │   ├── todoSlice.js     # Reducers & Actions (Slices)
│   │   │   ├── todoActions.js   # Dispatching actions (Async logic)
│   │   │   ├── todoSelectors.js # Selectors to get specific state
│   │   │   ├── todoTypes.js     # (Optional) Constants for action types
│   │── auth/                    # Another feature (e.g., Authentication)
│── components/
│   ├── AddTodo.js               # UI Component for adding todos
│   ├── Todos.js                  # UI Component displaying todos
│── App.js
│── index.js




📌 Understanding useDispatch & useSelector in Redux
1️⃣ useDispatch (Dispatch Actions to Redux Store)
useDispatch() is a hook that allows components to send actions to the Redux store.
Used to update the state by triggering reducers.

```
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const dispatch = useDispatch();
dispatch(addTodo("New Task")); // This updates the Redux store
```

2️⃣ useSelector (Access Redux State in Components)
useSelector(state => state.todos) lets us fetch state from the Redux store.
Used to read data and update UI when the state changes.

```
import { useSelector } from 'react-redux';

const todos = useSelector(state => state.todos);
console.log(todos); // Logs current todos from Redux store

```


🛠 Redux Components Breakdown
1️⃣ store.js (Central Store)
Manages the global state of the app.

2️⃣ todoSlice.js (Reducer & Actions)
Handles state logic using Redux Toolkit.

3️⃣ todoActions.js (Action Creators)
Keeps dispatching logic separate (Useful for API calls).

4️⃣ todoSelectors.js (Selectors)
Encapsulates state selection logic.
---------------------------------------

🎯 How Everything Works Together
1️⃣ store.js combines all slices and manages the Redux state.
2️⃣ todoSlice.js defines reducers & actions for the todos feature.
3️⃣ todoActions.js provides functions to dispatch actions.
4️⃣ todoSelectors.js extracts state from Redux for cleaner components.
5️⃣ useDispatch() sends actions, and useSelector() reads state in components.



🔥 What is createSlice in Redux Toolkit?
createSlice is a Redux Toolkit function that simplifies the creation of reducers and actions in a single place. It helps manage state updates efficiently.

📌 Why use createSlice?
✅ Combines Reducers & Actions in one file
✅ Auto-generates Action Creators
✅ Simplifies Immutable State Updates