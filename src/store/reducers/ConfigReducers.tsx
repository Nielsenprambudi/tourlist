import { LOGIN, REGISTER, PROFILE, ADD_TOKEN, ADD_USERID ,SELECT_TOKEN, DESELECT_TOKEN, DESELECT_USERID, DESELECT_ROLE, ADD_ROLE, UPDATEPROFILE } from "../actions/ActionsType";

const initialState = {
    isLoadingLogin: false,
    isErrorLogin: false,
    isLogin: false,
    isLoadingRegister: false,
    isErrorRegister: false,
    isRegister: false,
    isLoadingUpdateProfile: false,
    isErrorUpdateProfile: false,
    isUpdateProfile: false,
    isLoadingProfile: false,
    isErrorProfile: false,
    isProfile: false,
    alertMsgErrorLogin: '',
    alertMsgSuccessLogin: '',
    alertMsgErrorRegister: '',
    alertMsgSuccessRegister: '',
    alertMsgErrorUpdateProfile: '',
    alertMsgSuccessUpdateProfile: '',
    alertMsgErrorProfile: '',
    profile: null,
    dataUser: null,
    token: null,
    id: null,
    role: null
};

export default (state = initialState, action: any) => 
{   
    switch (action.type) {
        
        case LOGIN + "_PENDING": {
            return {
                ...state,
                isLoadingLogin: true
            }
        }
        case LOGIN + "_REJECTED" : {
            return {
                ...state,
                isLoadingLogin: false,
                isErrorLogin: true,
                isLogin: false,
                alertMsgErrorLogin: action.payload.response.data.Message
            }
        }
        case LOGIN + "_FULFILLED": {
            return {
                ...state,
                isLoadingLogin: false,
                isErrorLogin: false,
                isLogin: true,
                alertMsgErrorLogin: '',
                alertMsgSuccessLogin: 'Login Successfully!',
                dataUser: action.payload.data.data
            }
        }
        case REGISTER + "_PENDING": {
            return {
                ...state,
                isLoadingRegister: true
            }
        }
        case REGISTER + "_REJECTED" : {
            return {
                ...state,
                isLoadingRegister: false,
                isErrorRegister: true,
                isRegister: false,
                // alertMsgErrorRegister: action.payload.response.data.Message
            }
        }
        case REGISTER + "_FULFILLED": {
            return {
                ...state,
                isLoadingRegister: false,
                isErrorRegister: false,
                isRegister: true,
                alertMsgErrorRegister: '',
                alertMsgSuccessRegister: 'Registered Successfully!'
            }
        }
        case PROFILE + "_PENDING": {
            return {
                ...state,
                isLoadingProfile: true
            }
        }
        case PROFILE + "_REJECTED" : {
            return {
                ...state,
                isLoadingProfile: false,
                isErrorProfile: true,
                isProfile: false,
                alertMsgErrorProfile: action.payload.response.data.Message
            }
        }
        case PROFILE + "_FULFILLED": {
            console.log("check profile", action.payload)
            return {
                ...state,
                isLoadingProfile: false,
                isErrorProfile: false,
                isProfile: true,
                alertMsgErrorProfile: '',
                profile: action.payload.data
            }
        }
        case UPDATEPROFILE + "_PENDING": {
            return {
                ...state,
                isLoadingUpdateProfile: true
            }
        }
        case UPDATEPROFILE + "_REJECTED" : {
            return {
                ...state,
                isLoadingUpdateProfile: false,
                isErrorUpdateProfile: true,
                isUpdateProfile: false,
                alertMsgErrorUpdateProfile: action.payload.response.data.Message
            }
        }
        case UPDATEPROFILE + "_FULFILLED": {
            return {
                ...state,
                isLoadingUpdateProfile: false,
                isErrorUpdateProfile: false,
                isUpdateProfile: true,
                alertMsgErrorUpdateProfile: '',
                alertMsgSuccessUpdateProfile: 'Update Profile Successfully!',
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
