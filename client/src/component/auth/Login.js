import React, { useState, useContext, useEffect } from 'react';
import authContext from '../../context/auth/authContext';
import alertContext from '../../context/alert/alertContext';

const Login = (props) => {
    const AlertContext = useContext(alertContext);
    const { setAlert } = AlertContext;
    const AuthContext = useContext(authContext);
    const { login , error , clearError ,isAuthenticated} = AuthContext;

    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
        if(error != null){
            setAlert(error , 'danger');
            clearError();
        }
        //eslint-disable-next-line
    },[error,isAuthenticated])

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
             login({ email, password});
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <input className="btn btn-block btn-primary" type="submit" value="Login" />
            </form>

        </div>
    )
}

export default Login
