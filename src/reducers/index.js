import { VisibilityFilters } from '../actions';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions/actionTypes';
import dummyTodos from 'assets/dummyTodos.json';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: dummyTodos
};

// (todos is actually state.todos)
function todosReducer(todos = [], action) {
  switch(action.type) {
    case ADD_TODO: {
      return [
        ...todos,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
      ];
    }
    case REMOVE_TODO: {
      var removeIndex = todos.findIndex((item) => item.id == action.id);
      if (removeIndex >= 0) {
        let newTodos = [...todos];
        newTodos.splice(removeIndex, 1);
        return newTodos;
      }
      else {
        return todos;
      }
    }
    case TOGGLE_TODO: {
      var toggleIndex = todos.findIndex((item) => item.id == action.id);
      let newTodos = todos.map((todo, index) => {
        if (index == toggleIndex) {
          return {
            text: todo.text,
            id: todo.id,
            completed: !todo.completed
          };
        }
        else {
          return todo;
        }
      });
      return newTodos;
    }
  }
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({ }, state, { visibilityFilter: action.filter });
    case ADD_TODO:
    case TOGGLE_TODO:
    case REMOVE_TODO:
      return Object.assign({ }, state, { todos: todosReducer(state.todos, action) });
    default:
      return state;
  }
}

export default todoApp;