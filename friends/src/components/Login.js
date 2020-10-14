import React, {useState} from 'react'
import axios from 'axios'

const initialState = {
    username:'',
    password:''
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

        axios.post('http://localhost:5000/api/login',credentials)
        .then(res => {
            window.localStorage.setItem("token", res.data.payload);
            console.log(res)
        })
        .catch(err => console.log(err))
        console.log(credentials)
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