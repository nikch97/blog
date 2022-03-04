import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../actions";

const SignUp = () => {
    const [user, setUser] = useState({
        nickname:'',
        email:'',
        password:''
    });

    // const registration = useSelector(state => state.register.registering)
    const dispatch = useDispatch();
    
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
            dispatch(userActions.register(user));
        }
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    return (<>
        <form onSubmit={onSubmit}>
            <input placeholder="Nickname" name="nickname" value={user.nickname} onChange={handleChange} type={'text'} />
            <input placeholder="Email" name="email" value={user.email} onChange={handleChange} type={'email'} />
            <input placeholder="Password" name="password" value={user.password} onChange={handleChange} type={'password'} />
            <input title="Sign Up" type={'submit'} />
            {/* {registration && <div>'registering...'</div>} */}
        </form>
        {/* {posts} */}
    </>);
}

export default SignUp;