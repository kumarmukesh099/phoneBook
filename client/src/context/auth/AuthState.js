import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
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

const Authstate = (props) => {
    const initialState = {
        token: localStorage.getItem('token'), //our browser local storage
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    }


    const [state, dispatch] = useReducer(authReducer, initialState); //state allow us to access any state and dispatch allow us to access it to reducer
    //reducer function with the application initial state, returns the current application state, then dispatches a function
    //https://css-tricks.com/getting-to-know-the-usereducer-react-hook/ for reference


    //Load User
    const loadUser = async () => {
        //load token into global headers
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            let loadUserResponse = await axios.get('/api/auth');
            dispatch({ type: USER_LOADED, payload: loadUserResponse.data })
        } catch (error) {
            dispatch({ type: AUTH_ERROR })
        }
    }

    //Register User
    const Register = async (formData) => {
        try {
            let requestData = {
                url: '/api/users',
                data: formData,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            let response = await axios(requestData);
            //    let response = await axios(url, data,cofig);
            dispatch({ type: REGISTER_SUCCESS, payload: response.data });
            loadUser();
        } catch (error) {
            dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg })
        }

    }

    //Login User
    const login = async (formData) => {
        try {
            let loginData = {
                email : formData.email,
                password : formData.password
            }
          let loginResponse =  await axios.post('/api/auth', loginData, {
                'Content-Type': 'application/json'
            })
            dispatch({type : LOGIN_SUCCESS , payload : loginResponse.data})
            loadUser();
        } catch (error) {
            dispatch({type : LOGIN_FAIL , payload : error.response.data.msg})
        }

    }

    //Logout User
    const logout = ()=>{
        dispatch({type : LOGOUT})
    }

    //Clear Errors
    const clearError = () => dispatch({ type: CLEAR_ERROR })


    return (
        <authContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                error: state.error,
                user: state.user,
                Register,
                clearError,
                loadUser,
                login,
                logout
            }}
        >
            {props.children}
        </authContext.Provider>
    );
};


export default Authstate;