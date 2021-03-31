import React, { useState, useContext } from 'react';
import alertContext from '../../context/alert/alertContext';
//useState to add the component level state 
const Register = () => {
    const AlertContext = useContext(alertContext);
    const { setAlert} = AlertContext;
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
        if(name == '' || email == '' || password == '' || confirm_password == ''){
            setAlert('Please enter all the fields', 'danger');
        }
        else if(password != confirm_password){
            setAlert('Password and Confirm Password should be same', 'danger');
        }
        else {
            console.log("Register Submitted")
        }
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
                    <input type="password" name="password" value={password} onChange={onChange} 
                    required minLength="6"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" value={confirm_password} onChange={onChange} 
                    required minLength='6'/>
                </div>
                <input className="btn btn-primary btn-block" type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register
