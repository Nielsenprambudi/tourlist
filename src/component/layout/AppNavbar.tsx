import React from 'react';
import { Link } from "react-router-dom";
import {addToken} from "./../../store/actions/ConfigAction";
import axios from 'axios';


const AppNavbar = () => {
        return (
            <div className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        TourList
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarMain">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMain">
                        {/* {isAuthenticated == false ? (

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                            ) : null
                        }
                        {isAuthenticated == true ? (
                            <ul className="navbar-nav ml-auto">
                                {
                                    this.props.role == "author" &&
                                    <li className="nav-item">
                                        <Link to="/article/post" className="nav-link">
                                            <i className="fas fa-plus"></i> Create New Article
                                        </Link>
                                    </li>
                                }
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/articles" className="nav-link">
                                        Articles
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" onClick={this.onLogoutClick}>
                                        Logout
                                    </Link>
                                </li>
                            </ul>

                        ) : null} */}
                        
                    </div>
                </div>
            </div>
        )
}

export default AppNavbar;