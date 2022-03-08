import { userConstants } from "../constants";

export function register(state={user:'',fetching:false, success:false, error:false}, action){
switch(action.type){
    case userConstants.REGISTER_REQUEST:
        return{
            fetching:true
        };
    case userConstants.REGISTER_SUCCESS:
        return{
            fetching:false,
            success:true,
            user:action.user
        };
    case userConstants.REGISTER_FAILURE:
        return{
            fetching:false,
            error:action.error
        };
    default:
        return state
}
};

export function login(state={loginUser:{},fetching:false, success:false, error:false}, action){
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return{
                fetching:true
            };
        case userConstants.LOGIN_SUCCESS:
            return{
                fetching:false,
                success:true,
                loginUser:action.user
            };
        case userConstants.LOGIN_FAILURE:
            return{
                fetching:false,
                error:action.error
            };
        default:
            return state
    }
    };

    export function update(state={updateUser:'',fetching:false, success:false, error:false}, action){
        switch(action.type){
            case userConstants.UPDATE_REQUEST:
                return{
                    fetching:true
                };
            case userConstants.UPDATE_SUCCESS:
                return{
                    fetching:false,
                    success:true,
                    updateUser:action.user
                };
            case userConstants.UPDATE_FAILURE:
                return{
                    fetching:false,
                    error:action.error
                };
            default:
                return state
        }
        }