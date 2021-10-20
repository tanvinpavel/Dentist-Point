import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import React from 'react';
import './Header.css'

const Header = () => {

    const {user, userSignOut} = useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Dental Point</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="mx-auto navbar-nav">
                        <Link className="nav-link active" to="/home">Home</Link>
                        <Link className="nav-link" to="/doctors">Doctors</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                    </div>

                    

                    { user.uid ? <span className="navbar-text">
                        <div className="navbar-nav me-lg-5">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{user.displayName}</a>
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