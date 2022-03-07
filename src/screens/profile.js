import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../actions";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const loginUser = JSON.parse(localStorage.getItem('loginUser'));
    const [user, setUser] = useState({
        nickname:loginUser[0].nickname,
        id:loginUser[0].id,
        password:loginUser[0].password,
        email:loginUser[0].email
    });



    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log(useSelector(state => state))
// useEffect(()=>{
//     // console.log(1368)
//     let url = "http://localhost:3001/posts"
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         let posts = data.map((post, index)=>{
//             return(<h2>
//                 {/* {post.title} */}
//             </h2>)
//         })
//         setPost(posts);
//     })
// }, [posts])
    const onSubmit = (e)=>{
        e.preventDefault();
        if(user){
            dispatch(userActions.update(user));
        }
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }

    const logOut = ()=>{
        localStorage.removeItem('loginUser');
        window.location.replace('/login');
    }
    return (<>
        <form onSubmit={onSubmit}>

            <input placeholder="Nickname" name="nickname" value={user.nickname} onChange={handleChange} type={'text'} />
            <input placeholder="Email" name="email" value={user.email} disabled type={'email'} />
            <input placeholder="Password" name="password" value={user.password} onChange={handleChange} type={'password'} />
            <input value={'Update'} type={'submit'} />
        </form>
        <button
        onClick={logOut}>
            Logout
        </button>
    </>);
}

export default Profile;