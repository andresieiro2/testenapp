import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
  }

  componentDidMount() {
    this.props.onChange(this.state.value);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value || '',
      });
    }
  }

  render() {
    return (
      <select
        name={this.props.name}
        className="form-control"
        disabled={this.props.disabled}
        value={this.props.value}
        onChange={e => {
          this.setState(
            {
              value: e.target.value,
            },
            () => {
              this.props.onChange(this.state.value);
            }
          );
        }}
      >
        {this.props.options &&
          this.props.options.map((opt, index) => (
            <option
              key={`select-input-${index}-${this.props.name}`}
              value={opt.value}
            >
              {opt.label}
            </option>
          ))}
      </select>
    );
  }
}

export default Users;
