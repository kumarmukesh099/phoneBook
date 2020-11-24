import React , {useState} from 'react'

const Register = () => {
    const [user , setUser] = useState({
        name : '',
        email :'',
        password :'',
        confirm_password : ''
    })

const onChange =(e)=>{
    console.log("user print", [e.target.name] ,e.target.value)
        setUser({[e.target.name]: e.target.value})
        console.log("user print after", user)
}
const onSubmit =(e)=>{
    e.preventDefault();
    console.log("Register Submit")
}

    const { name , email , password , confirm_password} = user;
    return (
        <div className="form-container">
            <h1>
                Account Register
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" value={confirm_password} onChange={onChange} />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary btn-blue"/>
            </form>
            
        </div>
    )
}

export default Register
