import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, onToggleClick, onRemoveClick }) => (
  <div className={'todo' + (todo.completed ? ' completed' : '')}>
    <input className="todoToggleControl" type="checkbox" onClick={onToggleClick} checked={todo.completed}>
    </input>
    <span className="todoText">
      {todo.text}
    </span>
    <span className="controls">
    <a href="" onClick={onRemoveClick}>X</a>
    </span>
  </div>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default Todo;