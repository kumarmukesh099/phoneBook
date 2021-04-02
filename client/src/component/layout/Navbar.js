import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';
import contactContext from '../../context/Contact/contactContext';

const Navbar = ({ title }) => {
    const AuthContext = useContext(authContext);
    const { isAuthenticated, user , logout} = AuthContext;
    const ContactContext = useContext(contactContext);
    const {clearContacts} = ContactContext;
    const logoutUser=()=>{
        logout();
        clearContacts();
    }

    const authLinks = (
        <Fragment>
            <li>
                Hello {user && user.name}
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <a onClick={logoutUser}>Logout</a>
            </li>
        </Fragment>
    )

    const guestLink = (
        <Fragment>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </Fragment>
    )

    return (
        <div className="navbar bg-primary">
            <h1>
                {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLink}
            </ul>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Contact PhoneBook'
}

export default Navbar
