import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { getAllComments } from "../../store/comments";
import { getAllFavorites } from "../../store/favorites";
import { getAllFlips } from "../../store/flips";
import { addUser } from "../../store/session";
import {useDispatch} from 'react-redux'

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(addUser(user))
      dispatch(getAllComments())
      dispatch(getAllFlips())
      dispatch(getAllFavorites())
    } else {
      setErrors(user.errors);
    }
  };

  const demo = async (e) =>{
    e.preventDefault();
    const user = await login("demo@aa.io", "password");
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(addUser(user))
      dispatch(getAllComments())
      dispatch(getAllFavorites())
    } else {
      setErrors(user.errors);
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className='page-container'>
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className="field-inputs">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="field-inputs">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <div className='submit-button-container' style={{ marginTop: '18px' }}>
            <button type="submit" className='blue-submit-button'>Login</button>
          </div>
          <div className='container redirect-container'>
            <p>Don't have an account? <nobr><a href='/sign-up'>Sign up</a></nobr></p>
            <p>Use a demo account? <nobr><a onClick={demo} className='demo-link'>Demo</a></nobr></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
