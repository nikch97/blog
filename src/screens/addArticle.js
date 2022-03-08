import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { articleActions } from "../actions";

const AddArticle = () => {
    const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    const [article, setArticle] = useState({
        title: '',
        main: '',
        author: '',
        select: 'Sport',
        date: date,
        comments: []
    });

    const save = useSelector(state => state.save)
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        if (article) {
            dispatch(articleActions.save(article));
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle({ ...article, [name]: value });
    }
    return (<>
        <form className="form" onSubmit={onSubmit}>
            {save.error && <b className="error">{save.error}</b>}
            {save.success && <b className="success">{save.article}</b>}
            <h2>Add A New Article!</h2>
            <input placeholder="Title" name="title" value={article.title.toUpperCase()} onChange={handleChange} type={'text'} required />
            <input placeholder="Author" name="author" value={article.author} onChange={handleChange} type={'text'} required />
            <input name="date" disabled value={article.date} />
            <select name="select" value={article.select} onChange={handleChange} required>
                <option value={'Education'}>Education</option>
                <option value={'Computer'}>Computer</option>
                <option value={'Sport'}>Sport</option>
            </select>
            <textarea placeholder="Main Text" name="main" value={article.main} onChange={handleChange} required />
            <input style={{ 'marginBottom': 20 }} value={'Save'} type={'submit'} />
        </form>
    </>);
}

export default AddArticle;