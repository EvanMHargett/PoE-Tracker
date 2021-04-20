import { Link } from 'react-router-dom';
import './Splash.css'
import React from 'react'

export default function Splash(){
    return (
        <div className="splash">
            <div className='main'>
                <h1 className="head">Path of Exile Tracker</h1>
                <p className="splash-text">An economy tracking tool for the game Path of Exile. Keep track of many relevant flips, using up to date pricing information. Favorite and comment on flips you like in particular. Create new flips if you don't yet see them on the site. Pricing information is pulled from the poe.ninja API and represents fairly accurately the current pricing information. Note that due to constantly changing prices and potential for price fixing, these prices might not be exactly right. Check the trade website for exact current values.</p>
                <p>
                    <Link to='/flips' className="pure-button splash-button">See all flips</Link>
                </p>
                <div className="about"> <span className="name"><p>Created By:</p><p>Evan Hargett</p></span> <a href="https://github.com/EvanMHargett"><img className="gh" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"></img></a><a href="https://www.linkedin.com/in/evan-hargett-47723b162/"><img className="li" src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"></img></a></div>
            </div>
            
        </div>
    )
}
