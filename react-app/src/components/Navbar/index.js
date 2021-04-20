import React, {useState} from 'react';
import './NavBar.css';
import {searchName} from '../../store/search'
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';

const NavBar = ({ setAuthenticated }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("")

  const user = useSelector(state => state.session.user)

  const searchFlips = async (e) => {
    e.preventDefault()
    dispatch(searchName(searchTerm))
    history.push('/search-results')
  }

//   const iconStyles = { fontSize: '30px', color: 'rgb(38, 38, 38)' }

  return (user &&
    <nav>
      <div className='menu'>
        <div >
          <NavLink  to="/" exact={true} activeClassName="active" className="link">
            <img className='logo' src="https://i.imgur.com/BdqMDGf.png" alt="Logo"></img>
          </NavLink>

        </div>
        <div className='search'>
          <form onSubmit={searchFlips}>
            <input type="text" placeholder="Search for flips" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
          </form>
        </div>
        <div className='user-buttons'>
          <div className='icons-container'>
            <NavLink to="/flips" exact={true} activeClassName="active" className="link">
              Flips
            </NavLink>
          </div>
          <div className='icons-container'>
            <NavLink to="/flips/new" exact={true} activeClassName="active" className="link">
              Create New Flip
            </NavLink>
          </div>
          <div className='icons-container'>
            <NavLink to="/favorites" exact={true} activeClassName="active" className="link">
              Favorites
            </NavLink>
          </div>
          {!user && 
            <div className='icons-container'>
                <NavLink to="/login" exact={true} activeClassName="active" className="link">
                Login
                </NavLink>
            </div>
          
          }
          {!user && 
            <div className='icons-container'>
                <NavLink to="/sign-up" exact={true} activeClassName="active" className="link">
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
