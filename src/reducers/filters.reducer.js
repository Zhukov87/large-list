import { SORT, FILTER } from "../actions/constants";

const initialState = {
  sort: "",
  filter: { value: "", filterBy: "label" }
};

export default (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case SORT: {
      const { sortBy } = payload;
      const nextState = { ...state };
      nextState.sort = sortBy;
      return nextState;
    }
    case FILTER: {
      const { value, filterBy } = payload;
      const nextState = { ...state };
      nextState.filter.value = value;
      nextState.filter.filterBy = filterBy;
      return nextState;
    }
    default: {
      return state;
    }
  }
};
