import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
