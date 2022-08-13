import React from 'react';
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";

const Login = () => {
    return (
        <div className='page'>
            <h1>Page Login</h1>
            <form style={{maxWidth:400,margin:'0 auto'}}>
                <Input type='text' placeholder='login'></Input>
                <Input type='password' placeholder='password'></Input>
                <Button>Enter</Button>
            </form>
        </div>
    );
};

export default Login;