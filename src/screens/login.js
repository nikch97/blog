import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../actions";

const Login = () => {
    const [user, setUser] = useState({
        email:'',
        password:''
    });

    const login = useSelector(state => state)
    const dispatch = useDispatch();
    // console.log(useSelector(state => state.login))

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
        <form onSubmit={onSubmit}>            
            <input placeholder="Email" name="email" value={user.email} onChange={handleChange} type={'email'} />
            <input placeholder="Password" name="password" value={user.password} onChange={handleChange} type={'password'} />
            <input value={'Login'} type={'submit'} />
            {login.error && <div>{login.error}</div>}
        </form>
    </>);
}

export default Login;