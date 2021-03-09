import React from 'react';
import './NavBar.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';

const NavBar = ({ setAuthenticated }) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)

  const onSearch = async (e) => {
    e.preventDefault()
    history.push('/search-results')
  }

  const iconStyles = { fontSize: '30px', color: 'rgb(38, 38, 38)' }

  return (user &&
    <nav>
      <div className='menu'>
        <div className='logo'>
          <NavLink  to="/" exact={true} activeClassName="active">
            <div>PoE Tracker</div>
          </NavLink>
        </div>
        <div className='user-buttons'>
          <div className='icons-container'>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </div>
          {!user && 
            <div className='icons-container'>
                <NavLink to="/login" exact={true} activeClassName="active">
                Login
                </NavLink>
            </div>
          
          }
          {!user && 
            <div className='icons-container'>
                <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
                </NavLink>
            </div>
          }
          {user && 
            <LogoutButton setAuthenticated={setAuthenticated}></LogoutButton>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
