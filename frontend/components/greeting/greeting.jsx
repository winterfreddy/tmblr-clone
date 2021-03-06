import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const newSession = () => {
        return(
            <div>
                <Link to="/" className="header-logo">S</Link>
                <div className="personal-links">
                    <a href="https://github.com/winterfreddy" target="_blank" className="github-link"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/winfred-huang/" target="_blank" className="linkedin-link"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://angel.co/u/winfred-huang" target="_blank" className="angellist-link"><i className="fab fa-angellist"></i></a>
                </div>
            </div>
        );
    };

    
    const currSession = () => {
        
        const dropdown = () => {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        return(
            <div>
                <nav className="dashboard-nav">
                    <Link to="/dashboard" className="header-logo">S</Link>
                    <div className="dropdown">
                        <button onClick={() => dropdown()} className="dropdown-button" type="button"><i className="fas fa-user"></i></button>
                        <div id="myDropdown" className="dropdown-content">
                            <div className="dropdown-header">
                                <label className="account-label">Account</label>
                                <button className="logout-button" onClick={props.logout}>Log out&nbsp;&nbsp;<i className="fas fa-sign-out-alt"></i></button>
                            </div>
                            {/* <div className="dropdown-like">
                                <a href="#"><i className="fas fa-heart"></i>&nbsp;Likes</a>
                            </div> */}
                            <div className="dropdown-follow">
                                <Link to="/following"><i className="fas fa-user-plus"></i>&nbsp;Following</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="personal-links">
                    <a href="https://github.com/winterfreddy/somerslt/wiki" target="_blank" className="github-link"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/winfred-huang/" target="_blank" className="linkedin-link"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://angel.co/u/winfred-huang" target="_blank" className="angellist-link"><i className="fab fa-angellist"></i></a>
                </div>target="_blank" 

            </div>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Greeting;