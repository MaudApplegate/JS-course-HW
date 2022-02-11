import React from 'react';

class UserInfo extends React.Component {
  render() {
    const { username, useremail, userpassword } = this.props;
    return (
      <div>
        <h3>Принято!</h3>
        <p>Имя : {username}</p>
        <p>Email : {useremail}</p>
        <p>Пароль : {userpassword}</p>
      </div>
    );
  }
}

export default UserInfo;
