import React from "react";
import { logout } from "../../services/auth";
import {resetFavorites} from '../../store/favorites'
import {useDispatch} from 'react-redux'
import { logoutUser } from "../../store/session";

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await logout();
    dispatch(resetFavorites())
    dispatch(logoutUser())
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
