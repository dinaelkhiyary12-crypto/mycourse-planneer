import { useState } from "react";
export default function ListeUser(){
    function GetUser(){
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users= await response.json();
            return users;
        };
        getData().then((users) => setusers(users))
    }
    const [utilisateur, setusers]= useState([]);
    return(
        <div>
            <button onClick={GetUser} id="btn">get users</button>
            <ul>
                {utilisateur.map((user)=>(
                    <li key={user.id}>{user.name}---{user.website}---{user.phone}</li>

                ))}
            </ul>
        </div>
    )

}