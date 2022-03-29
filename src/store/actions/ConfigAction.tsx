import { LOGIN, REGISTER, LOGOUT, PROFILE, UPDATEPROFILE, GETTOURISTS, GETDETILTOURISTS, ADDTOURISTS, UPDATETOURISTS, 
    DELETETOURISTS, CLEARDETILTOURISTS, CLEARADDTOURISTS, CLEARUPDATETOURISTS, CLEARDELETETOURISTS } from "./ActionsType";
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

export const logout = () => {
    return {
        type: LOGOUT 
    }
}

export const getprofile = (id: string) => {
    return {
        type: PROFILE,
        payload: http.get(`api/users/${id}`) 
    }
}

export const updateProfile = (id: string, data: any) => {
    return {
        type: UPDATEPROFILE,
        payload: http.put(`api/users/${id}`, data) 
    }
}

export const getTourists = (page: number) => {
    return {
        type: GETTOURISTS,
        payload: http.get(`api/Tourist?page=${page}`) 
    }
}

export const getDetilTourists = (id: number) => {
    return {
        type: GETDETILTOURISTS,
        payload: http.get(`api/Tourist/${id}`) 
    }
}

export const addTourists = (data: any) => {
    return {
        type: ADDTOURISTS,
        payload: http.post(`api/Tourist`, data) 
    }
}

export const updateTourists = (data: any, id: number) => {
    return {
        type: UPDATETOURISTS,
        payload: http.put(`api/Tourist/${id}`, data) 
    }
}

export const deleteTourists = (id: number) => {
    return {
        type: DELETETOURISTS,
        payload: http.delete(`api/Tourist/${id}`) 
    }
}

export const clearDetilTourist = () => {
    return {
        type: CLEARDETILTOURISTS,
    }
}

export const clearAddTourist = () => {
    return {
        type: CLEARADDTOURISTS,
    }
}

export const clearUpdateTourist = () => {
    return {
        type: CLEARUPDATETOURISTS,
    }
}

export const clearDeleteTourist = () => {
    return {
        type: CLEARDELETETOURISTS,
    }
}








