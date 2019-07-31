import {
    IS_LOGGED_IN, LOGIN_USER, SIGNOUT_USER,
    CREATE_DRAFT, UPDATE_DRAFT_LOCATION, DELETE_DRAFT, GET_PINS, CREATE_PIN
} from "./constants";


export default function reducer(state, {type, payload}) {
    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                currentUser: payload
            }
        case IS_LOGGED_IN:
            return {
                ...state,
                isAuth: payload
            }
        case SIGNOUT_USER:
            return {
                ...state,
                isAuth: false,
                currentUser: null
            }
        case CREATE_DRAFT:
            return {
                ...state,
                draft: {
                    latitude: 0,
                    longitude: 0
                }
            }
        case UPDATE_DRAFT_LOCATION:
            return {
                ...state,
                draft: payload
            }
        case DELETE_DRAFT:
            return {
                ...state,
                draft: null
            }
        case GET_PINS:
            return {
                ...state,
                pins: payload
            }
        case CREATE_PIN:
            if (state.pins.includes(payload)) break
            return {
                ...state,
                pins: [...state.pins, payload]
            }

    }
    return state;
}