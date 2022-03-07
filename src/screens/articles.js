import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleActions } from "../actions";
import { useNavigate} from 'react-router-dom';

const Articles = () => {
    useEffect(()=>{
        dispatch(articleActions.retrieve());
    },[]); 

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.retrieve.retrieved);
    const articles = search ==='' ? result : result.filter(f=>f.title.includes(search.toUpperCase())) ;

    return (<>
        <form>
            <input placeholder="Search Title..." name="search" value={search.toUpperCase()} 
             onChange={(e)=>setSearch(e.target.value)} type={'text'} />            
            {/* <input value={'Search'} type={'button'} /> */}
        </form>
        <button onClick={()=>articles.sort().reverse()}>Sort</button>
        <br/>
        {/* {articles && articles.length>0 && console.log(articles.reverse())} */}
        {articles && articles.length>0 && articles.map(article=>{
            return (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <br/>
                    <text>{article.author}</text>
                    <text>{article.date}</text>
                     <button
                     onClick={()=>{return navigate('/articleDetail',{state:article})}}>
                     View More...
                    </button>

                </div>
            )
       })} 
    </>);
}

export default Articles;