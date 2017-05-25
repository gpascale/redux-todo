import React from 'react';
import { addTodo } from '../../actions';
import TodoList from '../todolist/TodoList';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
          <div className="todoListSection">
          <div className="todoListHeader">
            <input ref="todoListInput" className="todoListInput" placeholder="Enter a todo item..." onKeyUp={(e) => {
              if(e.keyCode == 13)
                this.doAdd();
            }}>
            </input>
            <button className="todoListSubmit" onClick={this.doAdd.bind(this)}>Add</button>
          </div>
          <TodoList />
        </div>
      </div>
    );
  }

  doAdd() {
    var text = this.refs.todoListInput.value;
    if (text)
      this.props.store.dispatch(addTodo(text));
    this.refs.todoListInput.value = '';
  }
}

export default App;