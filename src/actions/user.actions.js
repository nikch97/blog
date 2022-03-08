import { userConstants } from "../constants";
import { userServer } from "../servers";

export const userActions = {
    register,
    login,
    update
};


function register(user) {
    return dispatch => {
        dispatch(request(user));
        userServer.register(user)  
            .then(
                user => {
                    dispatch(success('Registration successful'));
                    setTimeout(()=>window.location.replace('/login'), 1000);
                },
                error=>{
                    dispatch(failure(error.toString()));
                }
            )
    };
    function request(user){ return {type:userConstants.REGISTER_REQUEST,user}}
    function success(user){ return {type:userConstants.REGISTER_SUCCESS,user}}
    function failure(error){ return {type:userConstants.REGISTER_FAILURE,error}}
};

function login(user) {
    return dispatch => {
        dispatch(request(user));
        userServer.login(user.email,user.password)
        .then(
            res=> {
                if(res.data.length>0){
                    dispatch(success(res.data));
                    localStorage.setItem('loginUser', JSON.stringify(res.data));
                    window.location.replace('/profile');
                }else 
                dispatch(failure('User Not Found!'));                    
            },
            error=>{
                dispatch(failure(error.toString()));
            }
        )
    };
    function request(user){ return {type:userConstants.LOGIN_REQUEST,user}}
    function success(user){ return {type:userConstants.LOGIN_SUCCESS,user}}
    function failure(error){ return {type:userConstants.LOGIN_FAILURE,error}}
}

function update(user) {
    return dispatch => {
        dispatch(request(user));
        userServer.update(user)             
            .then(
                res => {
                    dispatch(success('Update successful'));
                    setTimeout(()=>window.location.replace('/login'), 1000);
                },
                error=>{
                    dispatch(failure(error.toString()));
                }
            )
    };
    function request(user){ return {type:userConstants.UPDATE_REQUEST,user}}
    function success(user){ return {type:userConstants.UPDATE_SUCCESS,user}}
    function failure(error){ return {type:userConstants.UPDATE_FAILURE,error}}
};