import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../actions";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();
    const login = useSelector(state => state.login)
    const dispatch = useDispatch();

    const onSubmit = (e)=>{
        e.preventDefault();
        if(user){
            dispatch(userActions.login(user));
        }
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    return (<>
        <form className="form" onSubmit={onSubmit}>
        {login.error && <b className="error">{login.error}</b>}  
        <h2>Login</h2>          
            <input placeholder="Email" name="email" value={user.email} onChange={handleChange} type={'email'} required/>
            <input placeholder="Password" name="password" value={user.password} onChange={handleChange} type={'password'} required />
            <input value={'Login'} type={'submit'} />
            <button
                onClick={() => { return navigate('/') }}>
                SignUp
            </button>
        </form>
    </>);
}

export default Login;