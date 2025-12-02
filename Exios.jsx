import  Axios  from "axios";
import { useState } from "react";
export default function Exios(){
    function GetUser(){
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            setusers(response.data)

        });
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


       
    


