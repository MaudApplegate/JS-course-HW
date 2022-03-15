import React, { useState } from 'react';
import { auth } from '../../context/firebase';
import { Link } from 'react-router-dom';

export const SignUp: React.FC = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = (
    e: React.ChangeEvent & { target: { name: string; value: string } }
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await auth.createUserWithEmailAndPassword(values.email, values.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="email" onChange={handleChange} value={values.email} />
      <input name="password" onChange={handleChange} value={values.password} />
      <button>Click</button>
      <Link to="/signup">Sign Up</Link>
    </form>
  );
};
