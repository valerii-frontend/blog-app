import React, {useContext, useState} from 'react';
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth,setIsAuth}= useContext(AuthContext);
    const [enteredName,setEnteredName]= useState('');
    const [enteredPassword,setEnteredPassword]= useState('');
    const [loginError,setLoginError]= useState(false);
    const inputNameHandler = (e)=> setEnteredName(e.target.value);
    const inputPasswordHandler = (e)=> setEnteredPassword(e.target.value);

    const login = e => {
        e.preventDefault();
        if(enteredName === 'root' && enteredName === 'root'){
        sessionStorage.setItem('auth','isAuth');
        setIsAuth(true);
        setLoginError(false);
        } else {
            setLoginError(true);
            setEnteredPassword('');
        }

    }
    return (
        <div className='page'>
            <h1>Page Login</h1>
            <form className='login' onSubmit={login}>
                <Input type='text'
                       title='root'
                       placeholder='login'
                       value={enteredName}
                       onChange={inputNameHandler}
                       onFocus={()=>setLoginError(false)}
                        style={{cursor:'help'}}/>
                <Input type='password'
                       title='root'
                       placeholder='password'
                       value={enteredPassword}
                       onChange={inputPasswordHandler}
                       style={{cursor:'help'}}/>
                {loginError && <div style={{color:'darkred',marginBottom:'10px'}}>Login or password is incorrect!</div>}
                <Button>Enter</Button>
            </form>
        </div>
    );
};

export default Login;