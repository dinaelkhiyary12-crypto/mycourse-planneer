import { useContext,createContext,useState} from "react";

const UserContext=createContext();

export default function TestUseContext(){
     const[user,setUser]=useState('dina');
     return(
          <>
               <UserContext.Provider value={user}>
                    <h1>{`Hello ${user}!again`}</h1>
                    <input type="text" onChange={(e)=>setUser(e.target.value)}/>
                    <Component2/>
               </UserContext.Provider>
               <Component6/>
          </>
     )
}
function Component2(){
     return (
          <>
               <h1>Component 2</h1>
               <Component3/>
          </>
     )
}
function Component3(){
     return (
          <>
               <h1>Component 3</h1>
               <Component4/>
          </>
     )
}
function Component4(){
     return (
          <>
               <h1>Component 4</h1>
               <Component5/>
          </>
     )
}
function Component5(){
     const user=useContext(UserContext);
     return (
          <>
               <h1>Component 5</h1>
               <h2>{`Hello ${user} again !`}</h2>
          </>
     )
}
function Component6(){
     const user=useContext(UserContext);
     return (
          <>
               <h1>Component 6</h1>
               <h2>{user ?`Hello ${user} again ! ` : "No user available"}</h2>
          </>
     )
}