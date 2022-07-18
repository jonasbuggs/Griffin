import React , {useState} from 'react'
import { signupFields } from '../constants/formFields'
import FormAction from './FormAction'
import Input from './Input'

const fields = signupFields
let fieldState = {}

fields.forEach(field => fieldState[field.id] = '')
export default function Signup() { 
    const [signupstate, setSignupstate] = useState(fieldState)

    const handleChange = (e) => setSignupstate({ ...signupstate, [e.target.id]: e.target.value })
    
    const createaccount = (e) => { 

    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        createaccount()
    }
    return (
        <>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <div className="-space-y-px">
                    {fields.map(field => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupstate[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    ))}
                    
                </div>
                <FormAction handleSubmit={handleSubmit} text="Signup" />
                </form>
        </>
    )
}