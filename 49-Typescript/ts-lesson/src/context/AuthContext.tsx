import React, { createContext } from 'react';
import firebase from 'firebase/app';

export const AuthContext = React.createContext<firebase.User | null>(null);
