import { LOGIN, REGISTER, PROFILE, ADD_TOKEN, ADD_USERID, ADD_ROLE ,SELECT_TOKEN, DESELECT_TOKEN, DESELECT_USERID, DESELECT_ROLE } from "./ActionsType";
import http from "../../core/http";

export const register = (reg: any) => {
    return {
        type: REGISTER,
        payload: http.post('api/authaccount/registration', reg) 
    }
} 

export const login = (data: any) => {
    return {
        type: LOGIN,
        payload: http.post('api/authaccount/login', data) 
    }
}

export const getprofile = (id: string) => {
    return {
        type: PROFILE,
        payload: http.get(`api/users/${id}`) 
    }
}




export const addToken = (token: string) => {
    return {
        type: ADD_TOKEN,
        token: token
    };
}

export const addUserId = (id: string) => {
    return {
        type: ADD_USERID,
        id: id
    };
}

export const addRole = (role: string) => {
    return {
        type: ADD_ROLE,
        role: role
    };
}

export const selectToken = () => {
    return {
        type: SELECT_TOKEN
    }
}

export const deselectToken = () => {
    return {
        type: DESELECT_TOKEN
    }
}

export const deselectUserId = () => {
    return {
        type: DESELECT_USERID
    }
}

export const deselectRole = () => {
    return {
        type: DESELECT_ROLE
    }
}



