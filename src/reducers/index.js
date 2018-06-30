import { ALL } from '../constants/filter-types';

const initialState = {
  listTitle: "Generic To Do list",
  listDescription: "What do you need more than this?",
  filter: ALL,
  todos: [
    {
      id: 0,
      title: "My first To Do",
      completed: false
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'TODO_TOGGLE_COMPLETION':
      return { ...state, todos: state.todos.map(todo => todo.id === action.payload ? Object.assign({}, todo, {completed: !todo.completed}) : todo) };
    case 'TODO_FILTER':
      return { ...state, filter: action.payload };
    case 'TODO_LIST_TITLE_CHANGE':
      return { ...state, listTitle: action.payload };
    case 'TODO_LIST_DESCRIPTION_CHANGE':
      return { ...state, listDescription: action.payload };
    default:
      return state;
  }
}

export default rootReducer;