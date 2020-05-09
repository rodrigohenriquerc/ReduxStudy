import React, { useRef } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as TodoActions} from './store/ducks/todos';

function TodoList({ todos, addTodo, toggleTodo, removeTodo }) {
  const inputEl = useRef(null);
  
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputEl.current.value);
    inputEl.current.value = '';
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input ref={inputEl} />
        <button type="submit">Novo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);