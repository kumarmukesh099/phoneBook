import {
    ADD_CONTACT,
    CONTACT_ERROR,
    GET_CONTACT,
    DELETE_CONTACT,
    CLEAR_CONTACTS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts], //...state.contacts it take the current data and then add it by action.payload
                loading: false
            }
        case GET_CONTACT:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case CONTACT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false

            }
        case CLEAR_CONTACTS:
            return {
                ...state,
                contacts: null,
                current: null,
                filtered: null,
                error: null
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact)
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case FILTER_CONTACT:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return contact.name.match(regex) || contact.email.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }


        default: return state
    }
}

