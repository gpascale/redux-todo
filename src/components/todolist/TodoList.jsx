import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Todo from '../todo/Todo';
import { toggleTodo, removeTodo } from '../../actions';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoList">
        <ul className="todoListItems">
          { this.props.todos.map(this.renderItem.bind(this)) }
        </ul>
      </div>
    );
  }

 /*-----------------------------------------------------------------------------
  Render a single item
  ----------------------------------------------------------------------------*/
  renderItem(item) {
    return (
      <li key={item.id}>
        <Todo todo={item}
              onToggleClick={() => { this.props.onTodoToggleClick(item.id); }}
              onRemoveClick={(e) => { this.props.onTodoRemoveClick(item.id); e.preventDefault(); }} />
      </li>);
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoToggleClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onTodoRemoveClick: (id) => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
