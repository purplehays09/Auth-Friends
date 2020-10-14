import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState = {
    name:'',
    age:'',
    email:''
}

export default function FriendForm(){
    const [formValues,setFormValues] = useState(initialState)

    const handleChanges = e => {
        const {name,value} = e.target

        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth().post('/friends',formValues)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add New Friend</h2>
            <input 
                type='text'
                name='name'
                value={formValues.name}
                placeholder="What's your name?"
                onChange={handleChanges}
            />

            <input 
                type='text'
                name='age'
                value={formValues.age}
                placeholder="What's your age?"
                onChange={handleChanges}
            />

            <input 
                type='email'
                name='email'
                value={formValues.email}
                placeholder="What's your email?"
                onChange={handleChanges}
            />

            <button>Submit</button>
        </form>
    )
}