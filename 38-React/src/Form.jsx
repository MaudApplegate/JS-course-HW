import React from 'react';
import UserInput from './UserInput/index';
import ValidError from './Validation/validError';
import UserInfo from './UserInfo/index';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    isUserInfoIsOpened: false,
  };

  onInputChange = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  validCheck = (valid, name) => {
    const nameValidCreate = `${name}Valid`;
    this.setState({
      [nameValidCreate]: valid,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isUserInfoIsOpened: true,
    });
  };

  render() {
    const {
      name,
      email,
      password,
      nameValid,
      emailValid,
      passwordValid,
      isUserInfoIsOpened,
    } = this.state;

    return (
      <form>
        <header>ФОРМА</header>
        <UserInput
          name="name"
          value={name}
          onInputChange={this.onInputChange}
        />
        <ValidError
          name="name"
          value={name}
          isValid={nameValid}
          validGlobal={this.validCheck}
        />
        <UserInput
          name="email"
          value={email}
          onInputChange={this.onInputChange}
        />
        <ValidError
          name="email"
          value={email}
          isValid={emailValid}
          validGlobal={this.validCheck}
        />
        <UserInput
          name="password"
          value={password}
          onInputChange={this.onInputChange}
        />
        <ValidError
          name="password"
          value={password}
          isValid={passwordValid}
          validGlobal={this.validCheck}
        />

        <button
          id="btn"
          disabled={nameValid && emailValid && passwordValid ? false : true}
          onClick={this.handleSubmit}
        >
          Отправить
        </button>
        {isUserInfoIsOpened && (
          <UserInfo username={name} useremail={email} userpassword={password} />
        )}
      </form>
    );
  }
}

export default Form;
