import React, { Component } from 'react';

class EditableLabel extends Component {
	state = {
		editing: false
	};

	getItemNameClasses() {
		let classes = 'badge m-20 badge';
		classes += '-primary';
		return classes;
	}

	render() {
		if (this.state.editing) {
			return (
				<form>
					<input type="text" value={this.props.name} /> <input type="submit" value="Submit" />
				</form>
			);
		}
		return (
			<div>
				<span
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
