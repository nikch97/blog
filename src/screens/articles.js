import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleActions } from "../actions";

const Articles = () => {
    const [user, setUser] = useState({
       
    });
    useEffect(()=>{
        dispatch(articleActions.retrieve())
    },[])


    const articles = useSelector(state => state.retrieve.retrieved)
    const dispatch = useDispatch();
    console.log(useSelector(state => state.retrieve.retrieved));
    const onSubmit = (e)=>{
        // e.preventDefault();
        // if(user){
        //     dispatch(userActions.update(user));
        // }
    }
   
    const handleChange = (e)=>{
        // const {name, value} = e.target;
        // setUser({...user, [name]:value});
    }
    return (<>
        <form onSubmit={onSubmit}>
            <input placeholder="Search Title..." name="search"  onChange={handleChange} type={'text'} />            
            <input value={'Search'} type={'submit'} />
        </form>
        <br/>
        {articles && articles.length>0 && articles.map(article=>{
            return (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <br/>
                    <text>{article.author}</text>
                    <text>{article.date}</text>
                    <text>View More...</text>

                </div>
            )
        })}
    </>);
}

export default Articles;