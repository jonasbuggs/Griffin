import React from 'react'
import Header from '../components/Header'
import Signup from '../components/Signup'

export default function Signuppage() { 
    return (
        <>
            <Header
                heading="Signup"
                paragraph="Already have an account? Login now!"
                linkName="Login"
                linkUrl="/login"
            />
            
            <Signup />
        </>
    )
}