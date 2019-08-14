import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
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
      <input
        type={this.props.type || 'text'}
        value={this.state.value}
        name={this.props.name}
        className="form-control"
        disabled={this.props.disabled}
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
      />
    );
  }
}

export default Users;
