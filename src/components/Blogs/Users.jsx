import React from 'react';
import Axios from 'axios';
import {useEffect, useState} from 'react'
import Navbar from '../Navbar';

const Users = () => {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const res = await Axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(res.data);
            setUsers(res.data);

        } catch (error) {
            console.log(error)
        }
    };
    fetchUsers();
    }, []);
    return (
    <>
    {console.log(users)}
    <Navbar isShown={true} />
    {users.length>0? (

        <div>
            {users.map((user)=>{
                return <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
            })}
        </div>
    ) :(
        <p>Loading....</p>

    )}
    
    </>
  );
};

export default Users