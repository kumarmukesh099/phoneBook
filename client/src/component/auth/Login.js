import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const {email,password} = user;

    const onChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log("Login Successfully")
    }
    return (
        <div className="form-container">
            <h1>
                Account Login
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group"> <label htmlFor="name">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-blue"/>
            </form>

        </div>
    )
}

export default Login
