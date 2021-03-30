import React, { useState } from 'react'

const Login = () => {

    const [user, setUser] = useState({
        email: 'qw',
        password: ''
    })

    const { email, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Login Done")
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={password} onChange={onChange} />
                </div>
                <input className="btn btn-block btn-primary" type="submit" value="Login" />
            </form>

        </div>
    )
}

export default Login
