import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleActions } from "../actions";
import { useNavigate } from 'react-router-dom';

const Articles = () => {
    useEffect(() => {
        dispatch(articleActions.retrieve());
    }, []);

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.retrieve.retrieved);
    const articles = search === '' ? result : result.filter(f => f.title.includes(search.toUpperCase()));

    return (
        <div className="article-container">
            <form>
                <input style={{'width':'20%'}} placeholder="Search Title..." name="search" value={search.toUpperCase()}
                    onChange={(e) => setSearch(e.target.value)} type={'text'} />
                <input value={'Search'} type={'button'} />
                {/* <button onClick={() => articles.sort().reverse()}>Sort</button> */}
            </form>           
            <div className="articles">
                {articles && articles.length > 0 && articles.map(article => {
                    return (
                        <div className="article" key={article.id}>
                            <h3>{article.title}</h3>
                            <br />
                            <div className="detail">
                                <span>Author: {article.author}</span>
                                <span>Date: {article.date}</span>
                                <button
                                    onClick={() => { return navigate('/articleDetail', { state: article }) }}>
                                    View More...
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>);
}

export default Articles;