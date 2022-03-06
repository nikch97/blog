import { articleConstants } from "../constants";

export function save(state={article:{},fetching:false, success:false, error:false}, action){
switch(action.type){
    case articleConstants.SAVE_REQUEST:
        return{
            fetching:true
        };
    case articleConstants.SAVE_SUCCESS:
        return{
            fetching:false,
            success:true
        };
    case articleConstants.SAVE_FAILURE:
        return{
            fetching:false,
            error:action.error
        };
    default:
        return state
}
};

export function retrieve(state={retrieved:{},fetching:false, success:false, error:false}, action){
    switch(action.type){
        case articleConstants.RETRIEVE_REQUEST:
            return{
                fetching:true
            };
        case articleConstants.RETRIEVE_SUCCESS:
            return{
                fetching:false,
                success:true,
                retrieved:action.article
            };
        case articleConstants.RETRIEVE_FAILURE:
            return{
                fetching:false,
                error:action.error
            };
        default:
            return state
    }
    };

    export function update(state={updatedArticle:{},fetching:false, success:false, error:false}, action){
        switch(action.type){
            case articleConstants.UPDATE_REQUEST:
                return{
                    fetching:true
                };
            case articleConstants.UPDATE_SUCCESS:
                return{
                    fetching:false,
                    success:true,
                    updatedArticle:action.article
                };
            case articleConstants.UPDATE_FAILURE:
                return{
                    fetching:false,
                    error:action.error
                };
            default:
                return state
        }
        }