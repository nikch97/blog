import axios from "axios";
export const articleServer ={
    save,
    retrieve,
    update
}


function save(article){
  return axios.post('http://localhost:3001/articles', article)    
};

function retrieve(){
    return axios.get(`http://localhost:3001/articles`)    
};

function update(article){ 
    let id = article.id  
   return axios.put(`http://localhost:3001/articles/${id}`,{
        // nickname: user.nickname,
        // password:user.password,
        // email:user.email
    })   
};