import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { addUser } from '../../store/session';
import { getAllComments } from '../../store/comments';
import { getAllFlips } from '../../store/flips';
import { getAllFavorites } from '../../store/favorites';
import {useDispatch} from 'react-redux'


const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch()

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(addUser(user))
        dispatch(getAllComments())
        dispatch(getAllFlips())
        dispatch(getAllFavorites())
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className='page-container'>
      <div className="container">
      <h4 className="top">Sign Up</h4>
      <form onSubmit={onSignUp}>
        <div className="field-inputs">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="field-inputs">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="field-inputs">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="field-inputs">
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className='submit-button-container' style={{ marginTop: '18px' }}>
            <button type="submit" className='blue-submit-button'>Sign Up</button>
        </div>
        <div className='container redirect-container'>
            <p className="links">Already have an account? <nobr><a href='/login'>Log in</a></nobr></p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SignUpForm;
