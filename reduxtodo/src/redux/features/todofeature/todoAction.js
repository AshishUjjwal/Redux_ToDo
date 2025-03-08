import { addTodo, removeTodo } from './todoSlice';

// Action to add a todo
export const createTodo = (text) => (dispatch) => {
    dispatch(addTodo(text));
};

// Action to remove a todo
export const deleteTodo = (id) => (dispatch) => {
    dispatch(removeTodo(id));
};
