import React from 'react';
import UserInfo from './UserInfo';
import ValidError from './Validation';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    isUserInfoIsOpened: true,
    nameValid: true,
    emailValid: true,
    passwordValid: true,
  };

  handleInput = (e) => {
    this.inputAdd(e);
    this.checkIsValid(e);
  };

  inputAdd = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  checkIsValid = (e) => {
    const { nameValid } = this.state;
    const value = e.target.value;
    switch (e.target.name) {
      case 'name':
        this.nameIsValid(value);
        break;
      case 'email':
        this.emailIsValid(value);
        break;
      case 'password':
        this.passwordIsValid(value);
        break;
    }
  };

  nameIsValid = (value) => {
    if (value.length > 3 && value.length < 30) {
      this.setState((state) => ({
        ...state,
        nameValid: false,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        nameValid: true,
      }));
    }
  };

  emailIsValid = (value) => {
    if (value.includes('@') && value.includes('.')) {
      this.setState((state) => ({
        ...state,
        emailValid: false,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        emailValid: true,
      }));
    }
  };

  passwordIsValid = (value) => {
    const el = value.match(/[a-z0-9]/g);

    if (value.length === el.length && value.length > 8) {
      this.setState((state) => ({
        ...state,
        passwordValid: false,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        passwordValid: true,
      }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      name,
      email,
      password,
      isUserInfoIsOpened,
      nameValid,
      passwordValid,
      emailValid,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <header>ФОРМА</header>
        <input
          name="name"
          placeholder="Имя"
          value={name}
          onChange={this.handleInput}
        ></input>
        {nameValid && <ValidError />}
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleInput}
        ></input>
        {emailValid && <ValidError />}
        <input
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={this.handleInput}
        ></input>
        {passwordValid && <ValidError />}
        <button>Отправить</button>
        {isUserInfoIsOpened && (
          <UserInfo username={name} useremail={email} userpassword={password} />
        )}
      </form>
    );
  }
}

export default App;
