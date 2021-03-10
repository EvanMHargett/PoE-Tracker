import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useDispatch } from 'react-redux'
import LoginForm from "./components/auth/LoginForm"
import SignUpForm from "./components/auth/SignUpForm"
import NavBar from "./components/Navbar"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import UsersList from "./components/UsersList"
import FavoritesPage from "./components/FavoritesPage"
import User from "./components/User"
import CreateFlip from "./components/CreateFlip"
import { authenticate } from "./services/auth"
import FlipsPage from './components/FlipsPage'
import {getAllFlips} from './store/flips'
import {getAllComments} from './store/comments'
import {getAllFavorites} from './store/favorites'
import {addUser} from './store/session'


function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(addUser(user))
        dispatch(getAllFlips())
        dispatch(getAllComments())
        dispatch(getAllFavorites())
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/flips/new" exact={true} authenticated={authenticated}>
          <CreateFlip />
        </ProtectedRoute>
        <ProtectedRoute path="/favorites" exact={true} authenticated={authenticated}>
          <FavoritesPage />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <FlipsPage/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
