import {
  CREATE_LIST,
  ADD_ELEMENT,
  DELETE_ELEMENT,
  EDIT_ELEMENT
} from "../actions/constants";

const initialState = [];

export default (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case CREATE_LIST: {
      const nextState = payload.list;
      return nextState;
    }

    case ADD_ELEMENT: {
      const { label, value } = payload;
      return [...state, { label: label, value: value }];
    }
    case DELETE_ELEMENT: {
      const { removableElemLabel } = payload;
      return [...state].filter(elem => elem.label !== removableElemLabel);
    }

    case EDIT_ELEMENT: {
      const { previousLable, label, value } = payload;
      return [...state].map(elem => {
        if (elem.label === previousLable) {
          elem.label = label;
          elem.value = value;
          return elem;
        }
        return elem;
      });
    }

    default: {
      return state;
    }
  }
};
