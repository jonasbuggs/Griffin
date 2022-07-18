import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
export default function Loginpage() {
    return (
        <>
            <Header
                heading="Login"
                paragraph="Don't have an account? Sign up now!"
                linkName="Sign Up"
                linkUrl="/signup"
            />
            <Login />
        </>
    )
}