import {types} from "../types";


const initialState = {
    users: [],
    user: {},
    loading: false
}


export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USERS:
            return {
                ...state,
                users: action.payload
            }

            case types.SET_USER:
                return{
                    ...state,
                    user: action.payload
                }

             case types.CLEAR_USER:
            return{
                ...state,
                user: {}
            }

            case types.ON_LOADING:
                return{
                    ...state,
                    loading: true
                }

            case types.OFF_LOADING:
            return{
                ...state,
                loading: false
            }

            case types.DELETE_USER:
            return{
                users: state.users.filter(user => user.id !== action.payload),
                user: {}
            }
             default: return state
    }
}