import {
  CREATE_LIST,
  SORT,
  ADD_ELEMENT,
  DELETE_ELEMENT,
  EDIT_ELEMENT,
  FILTER
} from "./constants";

export function createList(listSize, list) {
  return {
    type: CREATE_LIST,
    payload: { listSize, list }
  };
}

export function addElement(label, value) {
  return {
    type: ADD_ELEMENT,
    payload: { label, value }
  };
}

export function deleteElement(removableElemLabel) {
  return {
    type: DELETE_ELEMENT,
    payload: { removableElemLabel }
  };
}

export function editElement(previousLable, label, value) {
  return {
    type: EDIT_ELEMENT,
    payload: { previousLable, label, value }
  };
}

export function sort(sortBy) {
  return {
    type: SORT,
    payload: { sortBy }
  };
}

export function filter(value, filterBy) {
  return {
    type: FILTER,
    payload: { value, filterBy }
  };
}
