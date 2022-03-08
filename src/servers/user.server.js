import axios from "axios";
export const userServer ={
    register,
    login,
    update
}


function register(user){
  return axios.post('http://localhost:3001/users', user)   
};

function login(email,password){
    return axios.get(`http://localhost:3001/users/?email=${email}&password=${password}`)  
};

function update(user){ 
    let id = user.id  
   return axios.put(`http://localhost:3001/users/${id}`,{
        nickname: user.nickname,
        password:user.password,
        email:user.email
    })
};