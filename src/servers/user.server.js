import axios from "axios";
export const userServer ={
    register,
    login,
    update
}


function register(user){
  return axios.post('http://localhost:3001/users', user)
    // .then(res =>{
    //     localStorage.setItem('user', JSON.stringify(res.data));
    // })
    // .catch(error =>{
    //     console.log(error);
        
    // })
};

function login(email,password){
    return axios.get(`http://localhost:3001/users/?email=${email}&password=${password}`)
    // .then(res =>{
    //     loginUser= res.data.filter(e => {
    //       return (e.email==user.email && e.password==user.password)
    //     });
    //     localStorage.setItem('loginUser', JSON.stringify(loginUser))       
    // })
    // .catch(error =>{
    //     console.log(error);
        
    // })
};

function update(user){ 
    let id = user.id  
   return axios.put(`http://localhost:3001/users/${id}`,{
        nickname: user.nickname,
        password:user.password,
        email:user.email
    })
    // .then(res =>{
    //    console.log(res)       
    // })
    // .catch(error =>{
    //     console.log(error);
        
    // })
};