import { ADD_TODO, TODO_TOGGLE_COMPLETION, TODO_FILTER, TODO_LIST_TITLE_CHANGE, TODO_LIST_DESCRIPTION_CHANGE } from '../constants/action-types';

export const addToDo = toDo => {
  return {
    type: ADD_TODO,
    payload: toDo
  }
}
export const toggleCompletion = id => {
  return {
    type: TODO_TOGGLE_COMPLETION,
    payload: id
  }
}
export const filterToDos = type => {
  return {
    type: TODO_FILTER,
    payload: type
  }
}
export const changeListTitle = title => {
  return {
    type: TODO_LIST_TITLE_CHANGE,
    payload: title
  }
}
export const changeListDescription = desc => {
  return {
    type: TODO_LIST_DESCRIPTION_CHANGE,
    payload: desc
  }
}