import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import React from 'react';
import './Header.css'

const Header = () => {

    const {user, userSignOut} = useAuth();

    const active = { fontWeight: "bold", color: "#rgba(255,255,255,.75)" }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-md-3" to="/home"><i className="fas fa-tooth me-1"></i> Dental Point</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="mx-auto navbar-nav">
                        <NavLink className="nav-link" activeStyle={active} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={active} to="/doctors">Doctors</NavLink>
                        <NavLink className="nav-link" activeStyle={active} to="/about">About Us</NavLink>
                    </div>

                    { user.uid ? <span className="navbar-text">
                        <div className="navbar-nav me-lg-5">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span style={{"width" : "100px","textAlign": "end","display": "inline-block"}}>{user.displayName}</span></a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><span onClick={userSignOut} className="dropdown-item text-center log-pointer">Log Out</span></li>
                                    </ul>
                            </li>
                        </div>
                    </span>
                    :
                    <div className="me-5">
                        <Link className="btn-sm btn-info text-decoration-none" to="/login">Login</Link>
                        <Link className="btn-sm btn-warning text-decoration-none ms-2" to="/register">Sign up</Link>
                    </div> }
                </div>
            </div>
        </nav>
    );
};

export default Header;