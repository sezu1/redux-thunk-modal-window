import {types} from "../types";

function setUsersActionCreator(data) {
    return {
        type: types.SET_USERS,
        payload: data
    }
}


function setUserActionCreator(data) {
    return{
        type: types.SET_USER,
        payload: data
    }
}


function onLoadingActionCreator() {
    return{
        type: types.ON_LOADING
    }
}


function offLoadingActionCreator() {
    return{
        type: types.OFF_LOADING
    }
}


function getUsersActionCreator() {
    return async function (dispatch){
        try{
            dispatch(onLoadingActionCreator())
            const response = await fetch('http://localhost:8000/users')
            const users = await response.json()
            console.log(users)
            dispatch(setUsersActionCreator(users))
        }
        catch (error){
            console.log(error)
        }
        finally {
            dispatch(offLoadingActionCreator())
        }
    }
}


function getDetailUserActionCreator(id) {
    return async function (dispatch) {
        const response = await fetch(`http://localhost:8000/users/${id}`)
        const user = await response.json()
        dispatch(setUserActionCreator(user))
    }
}


function clearUserActionCreator() {
    return {
        type: types.CLEAR_USER
    }
}


function deleteUserActionCreator(id) {
    return async function (dispatch) {
        const response = await fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE'
        })
        const user = await response.json()
       }
}


function showModalActionCreator() {
    return {
        type: types.SHOW_MODAL
    }
}


function closeModalActionCreator(id) {
    return {
        type: types.CLOSE_MODAL
    }
}

export {
    getUsersActionCreator,
    getDetailUserActionCreator,
    clearUserActionCreator,
    deleteUserActionCreator,
    showModalActionCreator,
    closeModalActionCreator}