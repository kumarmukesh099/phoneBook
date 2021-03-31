import React , { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import { 
      REGISTER_SUCCESS,
      REGISTER_FAIL,
      USER_LOADED,
      AUTH_ERROR,
      LOGIN_SUCCESS,
      LOGIN_FAIL,
      LOGOUT,
      CLEAR_ERROR

} from '../types';

const Authstate = (props) =>{

    const initialState = {
        token : localStorage.getItem('token'), //our browser local storage
        isAuthenticated : null,
        loading : true,
        error : null
    }

    
const [state , dispatch] = useReducer(authReducer, initialState); //state allow us to access any state and dispatch allow us to access it to reducer
//reducer function with the application initial state, returns the current application state, then dispatches a function
//https://css-tricks.com/getting-to-know-the-usereducer-react-hook/ for reference


//Load User

//Register User

//Login User

//Logout User

//Clear Errors


return ( 
    <authContext.Provider
    value = {{
        token : state.token,
        isAuthenticated : state.isAuthenticated,
        loading : state.loading,
        error : state.error
        }}
    >
        {props.children}
    </authContext.Provider>
    );
};


export default Authstate;