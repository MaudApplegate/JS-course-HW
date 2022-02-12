import React from 'react';

class UserInput extends React.Component {
  onChange = (e) => {
    const { onInputChange, name } = this.props;
    onInputChange(e.target.value, name);
  };
  render() {
    return <input onChange={this.onChange} />;
  }
}

export default UserInput;
