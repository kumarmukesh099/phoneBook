import React , { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
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

    
const [state , dispatch] = useReducer(AuthReducer, initialState); //state allow us to access any state and dispatch allow us to access it to reducer

//Load User

//Register User

//Login User

//Logout User

//Clear Errors


return ( 
    <AuthContext.Provider
    value = {{
        token : state.token,
        isAuthenticated : state.isAuthenticated,
        loading : state.loading,
        error : state.error
        }}
    >
        {props.children}
    </AuthContext.Provider>
    );
};


export default Authstate;