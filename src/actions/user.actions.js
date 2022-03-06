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
        // if(localStorage.getItem('user')){
        //     dispatch(success(user));
        // }else  
        // dispatch(failure('Registration Unsuccessful'));   
            .then(
                user => {
                    dispatch(success(user.data));
                    setTimeout(()=>window.location.replace('/login'), 2000);
                    // dispatch(alertActions.success('Registration successful'));
                },
                error=>{
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
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
                    setTimeout(()=>window.location.replace('/profile'), 2000);
                }else 
                dispatch(failure('User Not Found!'));          
                // setTimeout(()=>window.location.replace('/profile'), 2000);
                // dispatch(alertActions.success('Registration successful'));
            },
            error=>{
                dispatch(failure(error.toString()));
                // dispatch(alertActions.error(error.toString()));
            }
        )
    //     if(localStorage.getItem('loginUser')!=='[]'){
    //         dispatch(success(localStorage.getItem('loginUser')));
    //         window.location.replace('/profile');
    //         // localStorage.clear();
    //     }else  
    //    { 
    //     localStorage.clear();
    //     dispatch(failure('User Not Found!'));
           
    //        }             
    };
    function request(user){ return {type:userConstants.LOGIN_REQUEST,user}}
    function success(user){ return {type:userConstants.LOGIN_SUCCESS,user}}
    function failure(error){ return {type:userConstants.LOGIN_FAILURE,error}}
}

function update(user) {
    return dispatch => {
        dispatch(request(user));
        userServer.update(user)
        
            // dispatch(success(user));
        
        // dispatch(failure('Registration Unsuccessful'));   
            .then(
                user => {
                    dispatch(success(user.data));
                    // history.push('/login');
                    // dispatch(alertActions.success('Registration successful'));
                },
                error=>{
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            )
    };
    function request(user){ return {type:userConstants.UPDATE_REQUEST,user}}
    function success(user){ return {type:userConstants.UPDATE_SUCCESS,user}}
    function failure(error){ return {type:userConstants.UPDATE_FAILURE,error}}
};