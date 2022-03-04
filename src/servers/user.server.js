import axios from "axios";
export const userServer ={
    register
}


function register(user){
    axios.post('http://localhost:3001/users', user)
    .then(res =>{
        console.log(res);
    })
    .catch(error =>{
        console.log(error)
    })
}