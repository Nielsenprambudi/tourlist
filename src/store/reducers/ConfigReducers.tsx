import { LOGIN_PENDING, LOGIN_REJECTED, LOGIN_FULFILLED, ADD_TOKEN, ADD_USERID ,SELECT_TOKEN, DESELECT_TOKEN, DESELECT_USERID, DESELECT_ROLE, ADD_ROLE } from "../actions/ActionsType";

const initialState = {
    isLoadingLogin: false,
    isErrorLogin: false,
    isLogin: false,
    alertMsgError: '',
    alertMsgSuccess: '',
    token: null,
    id: null,
    role: null
};

export default (state = initialState, action: any) => 
{   
    switch (action.type) {
        
        case LOGIN_PENDING: {
            return {
                ...state,
                isLoadingLogin: true
            }
        }
        case LOGIN_REJECTED : {
            console.log("check this payload", action.payload)
            return {
                ...state,
                isLoadingLogin: false,
                isErrorLogin: true,
                isLogin: false,
                alertMsgError: action.payload.response.data.Message
            }
        }
        case LOGIN_FULFILLED: {
            return {
                ...state,
                isLoadingLogin: false,
                isErrorLogin: false,
                isLogin: true,
                alertMsgError: '',
                alertMsgSuccess: 'Login Successfully!'
            }
        }
        case ADD_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case ADD_USERID:
            return {
                ...state,
                id: action.id
            }
        case ADD_ROLE:
            return {
                ...state,
                role: action.role
            }
        case SELECT_TOKEN:
            return { state }
        case DESELECT_TOKEN:
            return {
                ...state,
                token: null
            }
        case DESELECT_USERID:
            return {
                ...state,
                id: null
            }
        case DESELECT_ROLE:
            return {
                ...state,
                role: null
            }
        default:
            return state
    }
}
