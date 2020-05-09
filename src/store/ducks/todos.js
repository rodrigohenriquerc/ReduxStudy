import { createActions, createReducers } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addTodo: ['text'],
  toggleTodo: ['id'],
  removeTodo: ['id'],
});

const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [
        ...state,
        { id: Math.random(), text: action.payload.text, complete: false }
      ];
    case Types.TOGGLE:
      return state.map(todo => {
        if (todo.id === action.payload.id)
          return { ...todo, complete: !todo.complete };
        return todo;
      });
    case Types.REMOVE:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
