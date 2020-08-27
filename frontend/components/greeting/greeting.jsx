import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const newSession = () => {
        return(
            <Link to="/" className="header-logo">S</Link>
        );
    };

    
    const currSession = () => {
        
        const dropdown = () => {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        return(
            <nav className="dashboard-nav">
                {/* <div className="transparent-header"></div> */}
                <Link to="/dashboard" className="header-logo">S</Link>
                <div className="dropdown">
                    <button onClick={() => dropdown()} className="dropdown-button" type="button"><i className="fas fa-user"></i></button>
                    <div id="myDropdown" className="dropdown-content">
                        <div className="dropdown-header">
                            <label className="account-label">Account</label>
                            <button className="logout-button" onClick={props.logout}>Log out&nbsp;&nbsp;<i className="fas fa-sign-out-alt"></i></button>
                        </div>
                        <div className="dropdown-like">
                            <a href="#"><i className="fas fa-heart"></i>&nbsp;Likes</a>
                        </div>
                        <div className="dropdown-follow">
                            <a href="#"><i className="fas fa-user-plus"></i>&nbsp;Following</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Greeting;