import { createSelector } from "reselect";

const listSelector = state => {
  return state.largeList;
};

const filtersSelector = state => {
  return state.filters;
};

const filteredList = createSelector(
  listSelector,
  filtersSelector,
  (list, filters) => {
    if (filters.filter.value === "") {
      return list;
    }
    if (filters.filter.filterBy === "label") {
      return list.filter(elem => {
        return elem.label.startsWith(filters.filter.value);
      });
    }
    if (filters.filter.filterBy === "value") {
      return list.filter(elem => {
        return elem.value.startsWith(filters.filter.value);
      });
    }
  }
);

export const sortedList = createSelector(
  filteredList,
  filtersSelector,
  (list, filters) => {
    const sortFunctions = {
      fromMinToMax: (elem1, elem2) => elem1.label - elem2.label,
      fromMaxToMin: (elem1, elem2) => elem2.label - elem1.label
    };

    if (filters.sort !== "") {
      const sortedList = list.sort(sortFunctions[filters.sort]);
      return {
        largeList: sortedList,
        filters: filters
      };
    }

    return {
      largeList: list,
      filters: filters
    };
  }
);
