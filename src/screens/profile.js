import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../actions";

const Profile = () => {
    
    const loginUser = JSON.parse(localStorage.getItem('loginUser'));   
    const update = useSelector(state => state.update)
    const dispatch = useDispatch(); 
    const [user, setUser] = useState({
        nickname: loginUser[0].nickname,
        id: loginUser[0].id,
        password: loginUser[0].password,
        email: loginUser[0].email
    }); 
    const onSubmit = (e) => {
        e.preventDefault();
        if (user) {
            dispatch(userActions.update(user));
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const logOut = () => {
        localStorage.removeItem('loginUser');
        window.location.replace('/login');
    }
    return (<>
        <form className="form" onSubmit={onSubmit}>
        {update.error && <b className="error">{update.error}</b>}
        {update.success && <b className="success">{update.updateUser}</b>}
            <h2>Profile</h2>
            <input placeholder="Nickname" name="nickname" value={user.nickname} onChange={handleChange} type={'text'} />
            <input placeholder="Email" name="email" value={user.email} disabled type={'email'} />
            <input placeholder="Password" name="password" value={user.password} onChange={handleChange} type={'password'} />
            <input value={'Update'} type={'submit'} />
            <button
                onClick={logOut}>
                Logout
            </button>
        </form>

    </>);
}

export default Profile;