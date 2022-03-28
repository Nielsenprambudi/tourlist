import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const AppNavbar = () => {
        
        const {isLogin} = useSelector((state: any) => state?.config);

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
                        {!isLogin ? (

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
                        {isLogin ? (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/articles" className="nav-link">
                                        Tourist List
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Logout
                                    </Link>
                                </li>
                            </ul>

                        ) : null}
                        
                    </div>
                </div>
            </div>
        )
}

export default AppNavbar;