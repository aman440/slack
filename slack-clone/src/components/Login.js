import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <LoginContainer>
            <LoginInnerConatiner>
                <img src="https://wearethecity.com/wp-content/uploads/2019/08/Business-Babble-featured.jpg" alt="" />
                <h1>Sign in to BABBLE</h1>
                <p>babble.slack.com</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerConatiner>

        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerConatiner = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 200px;
        margin-bottom: 20px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;
