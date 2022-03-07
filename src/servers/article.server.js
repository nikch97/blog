import axios from "axios";
export const articleServer ={
    save,
    retrieve,
    change
}


function save(article){
  return axios.post('http://localhost:3001/articles', article)    
};

function retrieve(){
    return axios.get(`http://localhost:3001/articles`)    
};

function change(article){ 
    let id = article.id  
   return axios.put(`http://localhost:3001/articles/${id}`,{
    title:article.title,
    main:article.main,
    author:article.author,
    select:article.select,
    date:article.date,
    comments:article.comments 
    })   
};