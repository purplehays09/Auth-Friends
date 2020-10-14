import React, {useState,useEffect} from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export default function Friends(){
    const [friendsData,setFriendsData] = useState([])
    const [errors,setErrors] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then((res) => {
            console.log(res.data)
            setFriendsData(res.data);
        })
        .catch((err) => {
            setErrors(err)
            console.log(errors);
        });

        console.log(friendsData)
    },[])

    return(
        <div>
            <h2>Friends</h2>
            {
                friendsData.length > 0 &&
                friendsData.map(friend => {
                    return(
                        <Friend
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}
                        />
                    )
                })
            }

            <FriendForm/>
        </div>
    )
}