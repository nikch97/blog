import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleActions } from "../actions";
import { useLocation } from 'react-router-dom';

const ArticleDetail = () => {
    const { state } = useLocation();
    const [article, setArticle] = useState({
        title: state.title,
        main: state.main,
        author: state.author,
        select: state.select,
        date: state.date,
        id: state.id,
        comments: state.comments,
        comment: '',
    });
    
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        article.comments.push(article.comment)
        e.preventDefault();
        if (article) {
            dispatch(articleActions.change(article));
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle({ ...article, [name]: value });
    }
    return (<>
        <div className="more-info">
            <h2>{state.title}</h2>
            <p className="main">{state.main}</p>
            <div className="detail">
                <b>Author: {state.author}</b>
                <b>Date : {state.date}</b>
                <b>Category : {state.select}</b>
            </div>
        </div>
        <form className="comment" onSubmit={onSubmit}>
            <textarea rows="5" placeholder="Post a comment..." name="comment"
                value={article.comment} onChange={handleChange} required />
            <input value={'Post'} type={'submit'} />
        </form>
        < div className="comments">
            <h3 style={{ 'paddingBottom': 40 }}>Comments:</h3>
            {article.comments && article.comments.length > 0 && article.comments.slice(-5).reverse().map(cm => {
                return (
                    <>
                        <hr />
                        <span>{cm}</span>
                    </>
                )
            })}
        </div>
    </>);
}

export default ArticleDetail;