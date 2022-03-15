import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

type Props = {
  children: any;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const currentUser = useContext(AuthContext);
  console.log(children);
  //   return currentUser ? children : <Navigate to="/signin" />;

  return (
    <Routes>
      <Route path="/la" element={children} />{' '}
    </Routes>
  );
};

export default PrivateRoute;
