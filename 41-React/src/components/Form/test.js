import { useState } from 'react';

function wrapWithUser(Component) {
  // Информация, которую мы не хотим делать общедоступной
  var secretUserInfo = {
    name: 'Jack Franklin',
    favouriteColour: 'blue',
  };

  // возвращаем новый сгенерированный компонент React
  // используя функциональный компонент без состояния
  return function (props) {
    // передаем переменную с данными пользователя как свойство
    // вместе с остальными переданными свойствами
    return <Component user={secretUserInfo} {...props} />;
  };
}

var AppHeader = function (props) {
  if (props.user) {
    return <p>Logged in as {props.user.name}</p>;
  } else {
    return <p>You need to login</p>;
  }
};

var Test = wrapWithUser(AppHeader);

export default Test;
