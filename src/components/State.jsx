import React, { useState } from 'react'


const userData = [
  {
    name: "John",
    age: 25
  },
  {
    name: "Sara",
    age: 22
  },
  {
    name: "Ali",
    age: 30
  }
];


const State = () => {
    const [users, setUsers] = useState([]);
  



const handleUserData = () => setUsers(userData);
  return (
    <>
     <h1>Hello From State Component</h1>
     {users.map((user, index)=>{
       return( <div key={index}>
            <p>{user.name}</p>
            <p>user.age</p>
            <hr />
        </div>
        )
     })}
     <button onClick={handleUserData}>click me</button>
    </>
  )
}

export default State
