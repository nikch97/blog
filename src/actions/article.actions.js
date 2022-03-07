import { articleConstants } from "../constants";
import { articleServer } from "../servers";

export const articleActions = {
    save,
    retrieve,
    change
};


function save(article) {
    return dispatch => {
        dispatch(request(article));
        articleServer.save(article)         
            .then(
                article => {
                    dispatch(success(article.data));
                    // setTimeout(()=>window.location.replace('/articles'), 2000);                   
                },
                error=>{
                    dispatch(failure(error.toString()));                   
                }
            )
    };
    function request(article){ return {type:articleConstants.SAVE_REQUEST,article}}
    function success(article){ return {type:articleConstants.SAVE_SUCCESS,article}}
    function failure(error){ return {type:articleConstants.SAVE_FAILURE,error}}
};

function retrieve() {
    return dispatch => {
        dispatch(request());
        articleServer.retrieve()
        .then(
            res=> {
                if(res.data.length>0){
                    dispatch(success(res.data));                  
                }else 
                dispatch(failure('article Not Found!'));                          
            },
            error=>{
                dispatch(failure(error.toString()));               
            }
        )
             
    };
    function request(article){ return {type:articleConstants.RETRIEVE_REQUEST,article}}
    function success(article){ return {type:articleConstants.RETRIEVE_SUCCESS,article}}
    function failure(error){ return {type:articleConstants.RETRIEVE_FAILURE,error}}
}

function change(article) {
    return dispatch => {
        dispatch(request(article));
        articleServer.change(article)                 
            .then(
                article => {
                    dispatch(success(article.data));                   
                },
                error=>{
                    dispatch(failure(error.toString()));
                }
            )
    };
    function request(article){ return {type:articleConstants.UPDATE_REQUEST,article}}
    function success(article){ return {type:articleConstants.UPDATE_SUCCESS,article}}
    function failure(error){ return {type:articleConstants.UPDATE_FAILURE,error}}
};