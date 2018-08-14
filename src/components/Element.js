import React, { PureComponent } from "react";

class Element extends PureComponent {
  state = {
    edited: false,
    previousLabel: "",
    label: "",
    value: ""
  };

  renderBody = () => {
    const { label, value } = this.props.element;
    const { deleteElement, editElement } = this.props;

    if (!this.state.edited) {
      return (
        <div>
          <h3>{label}</h3>
          <p>{value}</p>
          <button
            onClick={() =>
              this.setState({
                edited: !this.state.edited,
                previousLabel: label,
                label: label,
                value: value
              })
            }
          >
            Edit
          </button>
          <button onClick={() => deleteElement(label)}>Delete</button>
        </div>
      );
    }

    return (
      <form
        onSubmit={() =>
          editElement(
            this.state.previousLabel,
            this.state.label,
            this.state.value
          )
        }
      >
        <p>Label</p>
        <input
          type="text"
          value={this.state.label}
          onChange={event => this.setState({ label: event.target.value })}
        />
        <p>Value</p>
        <input
          type="text"
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
        />
        <button type="submit" value="submit">
          Edited
        </button>
      </form>
    );
  };

  render() {
    return <div>{this.renderBody()}</div>;
  }
}

export default Element;
