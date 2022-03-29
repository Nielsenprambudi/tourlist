import { LOGIN, REGISTER, PROFILE, UPDATEPROFILE, GETTOURISTS, GETDETILTOURISTS,  ADDTOURISTS, UPDATETOURISTS, DELETETOURISTS, CLEARDETILTOURISTS,
    CLEARADDTOURISTS, CLEARUPDATETOURISTS, CLEARDELETETOURISTS, LOGOUT } from "../actions/ActionsType";

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
    isLoadingTourists: false,
    isErrorTourists: false,
    isLoadingDetilTourists: false,
    isErrorDetilTourists: false,
    isLoadingAddTourist: false,
    isErrorAddTourist: false,
    isAddTourist: false,
    isLoadingUpdateTourist: false,
    isErrorUpdateTourist: false,
    isUpdateTourist: false,
    isLoadingDeleteTourist: false,
    isErrorDeleteTourist: false,
    isDeleteTourist: false,
    alertMsgErrorLogin: '',
    alertMsgSuccessLogin: '',
    alertMsgErrorRegister: '',
    alertMsgSuccessRegister: '',
    alertMsgErrorUpdateProfile: '',
    alertMsgSuccessUpdateProfile: '',
    alertMsgErrorProfile: '',
    alertMsgErrorTourists: '',
    alertMsgErrorDetilTourists: '',
    alertMsgErrorAddTourist: '',
    alertMsgSuccessAddTourist: '',
    alertMsgErrorUpdateTourist: '',
    alertMsgSuccessUpdateTourist: '',
    alertMsgErrorDeleteTourist: '',
    alertMsgSuccessDeleteTourist: '',
    profile: null,
    dataUser: null,
    tourists: [],
    touristDetil: null,
    page: 1,
    per_page: 10,
    totalrecord: 0,
    total_pages: 0
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
        case GETTOURISTS + "_PENDING": {
            return {
                ...state,
                isLoadingTourists: true
            }
        }
        case GETTOURISTS + "_REJECTED" : {
            return {
                ...state,
                isLoadingTourists: false,
                isErrorTourists: true,
                alertMsgErrorTourists: action.payload.response.data.Message
            }
        }
        case GETTOURISTS + "_FULFILLED": {
            return {
                ...state,
                isLoadingTourists: false,
                isErrorTourists: false,
                alertMsgErrorTourists: '',
                tourists: action.payload.data.data,
                page: action.payload.data.page,
                per_page: action.payload.data.per_page,
                totalrecord: action.payload.data.totalrecord,
                total_pages: action.payload.data.total_pages
            }
        }
        case GETDETILTOURISTS + "_PENDING": {
            return {
                ...state,
                isLoadingDetilTourists: true
            }
        }
        case GETDETILTOURISTS + "_REJECTED" : {
            return {
                ...state,
                isLoadingDetilTourists: false,
                isErrorDetilTourists: true,
                alertMsgErrorDetilTourists: action.payload.response.data.Message
            }
        }
        case GETDETILTOURISTS + "_FULFILLED": {
            return {
                ...state,
                isLoadingDetilTourists: false,
                isErrorDetilTourists: false,
                alertMsgErrorDetilTourists: '',
                touristDetil: action.payload.data
            }
        }
        case ADDTOURISTS + "_PENDING": {
            return {
                ...state,
                isLoadingAddTourist: true
            }
        }
        case ADDTOURISTS + "_REJECTED" : {
            return {
                ...state,
                isLoadingAddTourist: false,
                isErrorAddTourist: true,
                isAddTourist: false,
                alertMsgErrorAddTourist: action.payload.response.data.Message
            }
        }
        case ADDTOURISTS + "_FULFILLED": {
            return {
                ...state,
                isLoadingAddTourist: false,
                isErrorAddTourist: false,
                isAddTourist: true,
                alertMsgErrorAddTourist: '',
                alertMsgSuccessAddTourist: 'Add Tourist Successfully!',
            }
        }
        case UPDATETOURISTS + "_PENDING": {
            return {
                ...state,
                isLoadingUpdateTourist: true
            }
        }
        case UPDATETOURISTS + "_REJECTED" : {
            return {
                ...state,
                isLoadingUpdateTourist: false,
                isErrorUpdateTourist: true,
                isUpdateTourist: false,
                alertMsgErrorUpdateTourist: action.payload.response.data.Message
            }
        }
        case UPDATETOURISTS + "_FULFILLED": {
            return {
                ...state,
                isLoadingUpdateTourist: false,
                isErrorUpdateTourist: false,
                isUpdateTourist: true,
                alertMsgErrorUpdateTourist: '',
                alertMsgSuccessUpdateTourist: 'Update Tourist Successfully!',
            }
        }
        case DELETETOURISTS + "_PENDING": {
            return {
                ...state,
                isLoadingDeleteTourist: true
            }
        }
        case DELETETOURISTS + "_REJECTED" : {
            return {
                ...state,
                isLoadingDeleteTourist: false,
                isErrorDeleteTourist: true,
                isDeleteTourist: false,
                alertMsgErrorDeleteTourist: action.payload.response.data.Message
            }
        }
        case DELETETOURISTS + "_FULFILLED": {
            return {
                ...state,
                isLoadingDeleteTourist: false,
                isErrorDeleteTourist: false,
                isDeleteTourist: true,
                alertMsgErrorDeleteTourist: '',
                alertMsgSuccessDeleteTourist: 'Delete Tourist Successfully!',
            }
        }
        case CLEARADDTOURISTS: {
            return {
                ...state,
                isLoadingAddTourist: false,
                isErrorAddTourist: false,
                isAddTourist: false,
                alertMsgErrorAddTourist: '',
                alertMsgSuccessAddTourist: '',
            }
        }
        case CLEARUPDATETOURISTS: {
            return {
                ...state,
                isLoadingUpdateTourist: false,
                isErrorUpdateTourist: false,
                isUpdateTourist: false,
                alertMsgErrorUpdateTourist: '',
                alertMsgSuccessUpdateTourist: '',
            }
        }
        case CLEARDELETETOURISTS: {
            return {
                ...state,
                isLoadingDeleteTourist: false,
                isErrorDeleteTourist: false,
                isDeleteTourist: false,
                alertMsgErrorDeleteTourist: '',
                alertMsgSuccessDeleteTourist: '',
            }
        }
        case CLEARDETILTOURISTS: {
            return {
                ...state,
                isLoadingDetilTourists: false,
                isErrorDetilTourist: false,
                touristDetil: null,
                alertMsgErrorDetilTourists: ''
            }
        }
        case LOGOUT: {
            return {
                ...state,
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
                isLoadingTourists: false,
                isErrorTourists: false,
                isLoadingDetilTourists: false,
                isErrorDetilTourists: false,
                isLoadingAddTourist: false,
                isErrorAddTourist: false,
                isAddTourist: false,
                isLoadingUpdateTourist: false,
                isErrorUpdateTourist: false,
                isUpdateTourist: false,
                isLoadingDeleteTourist: false,
                isErrorDeleteTourist: false,
                isDeleteTourist: false,
                alertMsgErrorLogin: '',
                alertMsgSuccessLogin: '',
                alertMsgErrorRegister: '',
                alertMsgSuccessRegister: '',
                alertMsgErrorUpdateProfile: '',
                alertMsgSuccessUpdateProfile: '',
                alertMsgErrorProfile: '',
                alertMsgErrorTourists: '',
                alertMsgErrorDetilTourists: '',
                alertMsgErrorAddTourist: '',
                alertMsgSuccessAddTourist: '',
                alertMsgErrorUpdateTourist: '',
                alertMsgSuccessUpdateTourist: '',
                alertMsgErrorDeleteTourist: '',
                alertMsgSuccessDeleteTourist: '',
                profile: null,
                dataUser: null,
                tourists: [],
                touristDetil: null,
                page: 1,
                per_page: 10,
                totalrecord: 0,
                total_pages: 0
            }
        }
        default:
            return state
    }
}
