import React, {useState} from 'react'

const initialState = {
    username:'',
    passowrd:''
}

export default function Login(){
    const [credentials,setCredentials] = useState(initialState)

    const handleChanges = e => {
        const {name,value} = e.target

        setCredentials({
            ...credentials,
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log('WE DID IT')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='username'
                value={credentials.username}
                placeholder='username'
                onChange={handleChanges}
            />
            <input 
                type='password'
                name='password'
                value={credentials.password}
                placeholder='password'
                onChange={handleChanges}
            />

            <button>Login</button>
        </form>
    )
}