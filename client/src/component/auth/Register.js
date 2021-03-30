import React, { useState } from 'react'
//useState to add the component level state 
const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const { name, email, password, confirm_password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: [e.target.value] })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Register Submitted")
    }


    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">Confirm Passeord</label>
                    <input type="text" name="confirm_password" value={confirm_password} onChange={onChange} />
                </div>
                <input className="btn btn-primary btn-block" type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register
