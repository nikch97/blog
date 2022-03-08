import React, { useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../actions";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [user, setUser] = useState({
        nickname: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const register = useSelector(state => state.register)
    const dispatch = useDispatch();   
    const onSubmit = (e) => {
        e.preventDefault();
        if (user) {
            dispatch(userActions.register(user));
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    return (<>

        <form className="form" onSubmit={onSubmit}>
            {register.error && <b className="error">{register.error}</b>}
            {register.success && <b className="success">{register.user}</b>}
            <h2>SignUp</h2>
            <input placeholder="Nickname" name="nickname" value={user.nickname} onChange={handleChange} type={'text'} required />
            <input placeholder="Email" name="email" value={user.email} onChange={handleChange} type={'email'} required />
            <input placeholder="Password" name="password" value={user.password} onChange={handleChange} type={'password'} required />
            <input value={'Sign Up'} type={'submit'} />
            <button
                onClick={() => { return navigate('/login') }}>
                Login
            </button>
        </form>
    </>);
}

export default SignUp;