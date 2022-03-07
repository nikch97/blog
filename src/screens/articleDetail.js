import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleActions } from "../actions";
import { useLocation } from 'react-router-dom';

const ArticleDetail = () => {
    const {state} = useLocation();
    const [article, setArticle] = useState({
        title:state.title,
        main:state.main,
        author:state.author,
        select:state.select,
        date:state.date,
        id:state.id,
        comments:state.comments,
        comment:'',
    });

    const comments = useSelector(state => state.change.updatedArticle)
    const dispatch = useDispatch();
    console.log(useSelector(state => state.change.updatedArticle))
    const onSubmit = (e)=>{
        article.comments.push(article.comment)
        e.preventDefault();
        if(article){
            dispatch(articleActions.change(article));
        }
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setArticle({...article, [name]:value});
    }   
    return (<>
    <div>
        <h2>{state.title}</h2>
        <br/>
        <p>{state.main}</p>
        <br/>
        <p>Author : {state.author}
           Category : {state.select}
        </p>
        <p>Date : {state.date}</p>
    </div>
        <form onSubmit={onSubmit}>                              
            <textarea placeholder="Post a comment..." name="comment" 
            value={article.comment}  onChange={handleChange} required/>           
            <input value={'Post'} type={'submit'} />
        </form>
        <br/>
        <hr/>
        <h3>Comments:</h3>
        {/* {cm} */}
        {article.comments&& article.comments.length>0&& article.comments.slice(-5).reverse().map(cm=>{
            return(
                <>
                <hr/>
                <span>{cm}</span>
                </>
            )
        })}
       
    </>);
}

export default ArticleDetail;