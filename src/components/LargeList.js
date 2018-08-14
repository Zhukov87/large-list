import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createList,
  addElement,
  deleteElement,
  sort,
  filter,
  editElement
} from "../actions/actions";
import Element from "./Element";
import { sortedList } from "../selectors/index.selector";

class LargeList extends Component {
  state = {
    listSize: "10000",
    newElementLabel: "",
    newElementValue: ""
  };

  handleCreateList = event => {
    event.preventDefault();
    this.props.createList(+this.state.listSize);
  };

  handleSort = sortBy => {
    this.props.sort(sortBy);
  };

  handleFilter = (value, filterBy) => {
    this.props.handleFilter(value, filterBy);
  };

  handleNewElementAdd = event => {
    event.preventDefault();
    this.props.addElement(
      this.state.newElementLabel,
      this.state.newElementValue
    );
  };

  renderListBody = list => {
    if (!list.length) {
      return <div>List not yet created</div>;
    }
    return (
      <ul>
        {list.map(element => {
          return (
            <li key={element.label}>
              <Element
                element={element}
                deleteElement={this.props.deleteElement}
                editElement={this.props.editElement}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    const { largeList } = this.props;

    return (
      <div>
        <form onSubmit={event => this.handleCreateList}>
          <input
            type="text"
            value={this.state.listSize}
            onChange={event => {
              this.setState({ listSize: event.target.value });
            }}
          />
          <button type="submit" value="submit">
            Create list
          </button>
        </form>
        <form onSubmit={this.handleNewElementAdd}>
          <p>Enter label</p>
          <input
            type="text"
            value={this.state.newElementLabel}
            onChange={event =>
              this.setState({ newElementLabel: event.target.value })
            }
          />
          <p>Enter value</p>
          <input
            type="text"
            value={this.state.newElementValue}
            onChange={event =>
              this.setState({ newElementValue: event.target.value })
            }
          />
          <button type="submit" value="submit">
            Add element
          </button>
        </form>
        <p>Sorting</p>
        <button onClick={() => this.handleSort("fromMinToMax")}>
          Sort from min to max
        </button>
        <button onClick={() => this.handleSort("fromMaxToMin")}>
          Sort from max to min
        </button>
        <form>
          <p>Filter</p>
          <input
            type="text"
            value={this.props.filters.filter.value}
            onChange={event => {
              this.handleFilter(
                event.target.value,
                this.props.filters.filter.filterBy
              );
            }}
          />
          <p>
            <input
              type="radio"
              name="filterBy"
              value="label"
              checked={this.props.filters.filter.filterBy === "label"}
              onChange={() =>
                this.handleFilter(this.props.filters.filter.value, "label")
              }
            />{" "}
            by label
          </p>
          <p>
            <input
              type="radio"
              name="filterBy"
              value="value"
              checked={this.props.filters.filter.filterBy === "value"}
              onChange={() =>
                this.handleFilter(this.props.filters.filter.value, "value")
              }
            />{" "}
            by value
          </p>
        </form>
        {this.renderListBody(largeList)}
      </div>
    );
  }
}

export default connect(
  sortedList,
  {
    createList,
    sort,
    handleFilter: filter,
    addElement,
    deleteElement,
    editElement
  }
)(LargeList);
