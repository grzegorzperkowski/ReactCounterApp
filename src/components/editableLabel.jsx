import React, { Component } from "react";

class EditableLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.name,
      id: this.props.id,
      editing: false
    };
  }

  getItemNameClasses() {
    let classes = "badge m-20 badge";
    classes += "-primary";
    return classes;
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Escape") this.setState({ editing: false });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ editing: false });
    this.props.onRename(this.props.name, this.state.input, this.state.id);
  };

  render() {
    if (this.state.editing) {
      return (
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
            onFocus={e => e.target.select()}
            maxLength={100}
            autoFocus={true}
            onKeyDown={this.handleKeyPress}
          />
          {/* <input type="submit" value="Submit" /> */}
        </form>
      );
    }
    return (
      <div>
        <span
          title="Double click to edit label"
          className={this.getItemNameClasses()}
          style={{ width: this.props.width }}
          onDoubleClick={() => this.setState({ editing: true })}
        >
          {this.props.name}
        </span>
      </div>
    );
  }
}
export default EditableLabel;
