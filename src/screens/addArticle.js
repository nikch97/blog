import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleActions } from "../actions";

const AddArticle = () => {
    const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const [article, setArticle] = useState({
        title:'',
        main:'',
        author:'',
        select:'Sport',
        date:date
    });

    const register = useSelector(state => state)
    const dispatch = useDispatch();
    // console.log(useSelector(state => state.save.article))
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
        if(article){
            dispatch(articleActions.save(article));
        }
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setArticle({...article, [name]:value});
    }
    return (<>
        <form onSubmit={onSubmit}>
            <input placeholder="Title" name="title" value={article.title} onChange={handleChange} type={'text'} required /> 
            <input placeholder="Author" name="author" value={article.author} onChange={handleChange} type={'text'} required/>
            <input name="date" disabled value={article.date}/>  
            <select name="select" value={article.select} onChange={handleChange} required>
                <option value={'Education'}>Education</option>
                <option value={'Computer'}>Computer</option>
                <option value={'Sport'}>Sport</option>
            </select>         
            <textarea placeholder="Main Text" name="main" value={article.main} onChange={handleChange} required/>           
            <input value={'Save'} type={'submit'} />
            {/* {register.error && <div>{register.error}</div>} */}
        </form>
        {/* {posts} */}
    </>);
}

export default AddArticle;